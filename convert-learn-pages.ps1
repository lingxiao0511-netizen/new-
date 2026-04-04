[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$pages = Get-ChildItem "src\app\learn" -Recurse -Filter "page.tsx"

$count = 0
foreach ($page in $pages) {
    $content = Get-Content $page.FullName -Raw -Encoding UTF8
    $original = $content

    # 1. Dark gradient background → Light healing gradient
    $content = $content -replace 'bg-gradient-to-br from-\[#1a1a2e\] via-\[#16213e\] to-\[#0f3460\]', 'bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5]'
    
    # 2. glass-card → organics
    $content = $content -replace '\bglass-card\b', 'organics'
    
    # 3. text-white → dark text (only standalone, not text-[#...] patterns)
    $content = $content -replace '\btext-white\b', 'text-[#231a14]'
    
    # 4. text-gray-300 → text-secondary
    $content = $content -replace '\btext-gray-300\b', 'text-[#504035]'
    
    # 5. text-gray-400 → text-muted
    $content = $content -replace '\btext-gray-400\b', 'text-[#7a6d60]'
    
    # 6. text-gray-200 → text-secondary
    $content = $content -replace '\btext-gray-200\b', 'text-[#504035]'
    
    # 7. bg-white/5 → warm semi-transparent
    $content = $content -replace 'bg-white/5\b', 'bg-[rgba(255,253,248,0.9)]'
    
    # 8. border-white/10 → warm border
    $content = $content -replace 'border-white/10\b', 'border-[rgba(160,148,136,0.3)]'
    
    # 9. Light blue accent (#7dd3fc) → Turquoise (#5ba4a4)
    $content = $content -replace '#7dd3fc', '#5ba4a4'
    
    # 10. Any remaining dark gradient patterns
    $content = $content -replace 'from-\[#1a1a2e\]', 'from-[#faf6f0]'
    $content = $content -replace 'from-\[#0a0a0a\]', 'from-[#faf6f0]'
    $content = $content -replace 'from-gray-900', 'from-[#faf6f0]'
    $content = $content -replace 'via-\[#16213e\]', 'via-[#f5f0e8]'
    $content = $content -replace 'to-\[#0f3460\]', 'to-[#ece3d5]'
    $content = $content -replace 'bg-\[#111827\]', 'bg-[#f5f0e8]'
    $content = $content -replace 'bg-gray-950', 'bg-[#f5f0e8]'
    $content = $content -replace 'bg-\[#0a0a0a\]', 'bg-[#faf6f0]'

    # 11. text-gray-500 → text-muted (if exists)
    $content = $content -replace '\btext-gray-500\b', 'text-[#7a6d60]'
    $content = $content -replace '\btext-gray-600\b', 'text-[#504035]'

    # 12. pt-32 on dark bg → pt-24 (light bg doesn't need as much breathing room)
    # Keep pt-32, it's fine for consistency
    
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($page.FullName, $content, [System.Text.UTF8Encoding]::new($false))
        $name = $page.FullName.Replace((Get-Location).Path + "\", "")
        Write-Output "✅ $name"
        $count++
    } else {
        $name = $page.FullName.Replace((Get-Location).Path + "\", "")
        Write-Output "⏭️  $name (no changes)"
    }
}

Write-Output ""
Write-Output "================================="
Write-Output "Done: $count pages converted"
Write-Output "================================="
