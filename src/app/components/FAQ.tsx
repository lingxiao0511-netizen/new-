'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FAQItem {
  question: {
    zh: string;
    en: string;
  };
  answer: {
    zh: string;
    en: string;
  };
  category: {
    zh: string;
    en: string;
  };
}

const FAQAccordion: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card rounded-xl overflow-hidden mb-4">
      <button
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 w-8 h-8 bg-[#7dd3fc]/10 rounded-full flex items-center justify-center text-[#7dd3fc] font-bold text-sm">
            {index + 1}
          </span>
          <span className="text-lg font-medium text-white">
            {item.question[language]}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 text-[#7dd3fc] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-5 pt-0">
          <div className="ml-12 text-gray-400 leading-relaxed">
            {item.answer[language]}
          </div>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqItems: FAQItem[] = [
    {
      category: { zh: '服务流程', en: 'Service Process' },
      question: {
        zh: '咨询需要准备什么？',
        en: 'What do I need to prepare for consultation?'
      },
      answer: {
        zh: '请准备准确的出生信息（阳历或农历的年月日时），以及想要咨询的具体问题。如果不确定出生时辰，可以提供大概时间范围，大师会帮您推算。',
        en: 'Please prepare accurate birth information (year, month, day, hour in solar or lunar calendar), and specific questions you want to consult. If unsure about birth time, provide an approximate range and the master will help calculate.'
      }
    },
    {
      category: { zh: '服务流程', en: 'Service Process' },
      question: {
        zh: '咨询形式有哪些？',
        en: 'What consultation formats are available?'
      },
      answer: {
        zh: '支持多种咨询形式：微信视频/语音、腾讯会议、电话、或文字咨询。您可以根据个人喜好选择，1v1 服务推荐使用视频或语音，能获得更详细的解读。',
        en: 'Multiple formats available: WeChat video/voice call, Tencent Meeting, phone call, or text consultation. Choose based on your preference. For 1v1 service, video or voice call is recommended for more detailed interpretation.'
      }
    },
    {
      category: { zh: '服务流程', en: 'Service Process' },
      question: {
        zh: '多久能收到报告？',
        en: 'How long until I receive the report?'
      },
      answer: {
        zh: '文字报告通常在 24-48 小时内交付。加急服务可当天交付（需额外收费）。1v1 咨询结束后，咨询录音和总结报告会在 24 小时内发送给您。',
        en: 'Text reports are typically delivered within 24-48 hours. Rush service available for same-day delivery (additional fee). For 1v1 consultation, recording and summary report will be sent within 24 hours.'
      }
    },
    {
      category: { zh: '服务流程', en: 'Service Process' },
      question: {
        zh: '如何预约咨询时间？',
        en: 'How do I book a consultation time?'
      },
      answer: {
        zh: '您可以通过网站预约表单、微信、或邮件预约。提供您的可用时间段，我们会确认具体咨询时间并发送预约确认。建议提前 2-3 天预约以确保有合适时间。',
        en: 'You can book through website form, WeChat, or email. Provide your available time slots, we will confirm specific consultation time and send confirmation. Booking 2-3 days in advance is recommended.'
      }
    },
    {
      category: { zh: '支付退款', en: 'Payment & Refund' },
      question: {
        zh: '支持哪些支付方式？',
        en: 'What payment methods are accepted?'
      },
      answer: {
        zh: '支持微信支付、支付宝、银行转账。海外客户可使用 PayPal 或信用卡支付。支付成功后会发送确认邮件和收据。',
        en: 'We accept WeChat Pay, Alipay, and bank transfer. International clients can use PayPal or credit card. Confirmation email and receipt will be sent after payment.'
      }
    },
    {
      category: { zh: '支付退款', en: 'Payment & Refund' },
      question: {
        zh: '可以退款吗？',
        en: 'Can I get a refund?'
      },
      answer: {
        zh: '报告交付前可全额退款。报告交付后，如有重大遗漏或错误，7 天内可免费修改或退款。1v1 咨询完成后不支持退款，但如有不满意可在 7 天内申请部分退款。',
        en: 'Full refund available before report delivery. After delivery, free revision or refund within 7 days for major omissions or errors. 1v1 consultation is non-refundable after completion, but partial refund can be requested within 7 days if unsatisfied.'
      }
    },
    {
      category: { zh: '支付退款', en: 'Payment & Refund' },
      question: {
        zh: '有优惠码吗？',
        en: 'Are there any discount codes?'
      },
      answer: {
        zh: '新用户首次咨询使用优惠码 FIRST50 可享 5 折优惠。推荐好友双方各得¥100 优惠券。关注微信公众号不定期发放优惠券。',
        en: 'New users can get 50% off with code FIRST50 for first consultation. Refer a friend and both get ¥100 coupon. Follow our WeChat official account for periodic coupons.'
      }
    },
    {
      category: { zh: '隐私保密', en: 'Privacy' },
      question: {
        zh: '我的信息保密吗？',
        en: 'Is my information confidential?'
      },
      answer: {
        zh: '严格保密是我們的服務原則。所有客户信息仅用于咨询服务，咨询结束后会删除个人信息（法律要求保留的除外）。不会向第三方透露任何客户信息。',
        en: 'Strict confidentiality is our service principle. All client information is used only for consultation, and personal data will be deleted after consultation (except as required by law). No client information will be disclosed to third parties.'
      }
    },
    {
      category: { zh: '隐私保密', en: 'Privacy' },
      question: {
        zh: '咨询内容会被记录吗？',
        en: 'Will consultation content be recorded?'
      },
      answer: {
        zh: '1v1 视频/语音咨询会提供录音服务（需客户同意），录音仅供客户个人使用。文字咨询会有完整记录保存 30 天，方便客户查阅和追问。',
        en: '1v1 video/voice consultations can be recorded (with client consent), recordings are for personal use only. Text consultations are saved for 30 days for client reference and follow-up questions.'
      }
    },
    {
      category: { zh: '服务效果', en: 'Effectiveness' },
      question: {
        zh: '准确率如何？',
        en: 'What is the accuracy rate?'
      },
      answer: {
        zh: '灵霄大师 20 年经验，客户反馈准确率 95%+。但玄学仅供参考，最终决策还需您理性判断。我们不承诺改变命运，只提供趋吉避凶的建议。',
        en: 'Master LingXiao has 20 years experience, customer feedback shows 95%+ accuracy. However, metaphysics is for reference only, final decisions should be made rationally. We don\'t promise to change fate, only provide suggestions to avoid misfortune.'
      }
    },
    {
      category: { zh: '服务效果', en: 'Effectiveness' },
      question: {
        zh: '咨询后运势会改变吗？',
        en: 'Will my fortune change after consultation?'
      },
      answer: {
        zh: '咨询本身不会改变运势，但通过了解运势趋势和调整建议，您可以做出更明智的决策，从而改善生活。风水布局和环境调整可以帮助改善气场。',
        en: 'Consultation itself doesn\'t change fortune, but by understanding trends and adjustment suggestions, you can make wiser decisions to improve life. Feng shui layout and environment adjustment can help improve energy flow.'
      }
    },
    {
      category: { zh: '服务效果', en: 'Effectiveness' },
      question: {
        zh: '有问题可以追问吗？',
        en: 'Can I ask follow-up questions?'
      },
      answer: {
        zh: '可以！标准服务包含 7 天免费追问，专业服务包含 30 天免费追问，全年会员无限次追问。追问可通过微信、邮件或网站表单。',
        en: 'Yes! Standard service includes 7 days free follow-up, premium service includes 30 days, annual membership has unlimited follow-ups. Follow-ups can be via WeChat, email, or website form.'
      }
    }
  ];

  const categories = [
    { id: 'all', zh: '全部', en: 'All' },
    { id: '服务流程', en: 'Service Process' },
    { id: '支付退款', en: 'Payment & Refund' },
    { id: '隐私保密', en: 'Privacy' },
    { id: '服务效果', en: 'Effectiveness' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category.zh === activeCategory || item.category.en === activeCategory);

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-[#7dd3fc]/10 backdrop-blur-sm border border-[#7dd3fc]/30 rounded-full">
              <span className="text-[#7dd3fc] text-xs tracking-widest uppercase">
                {language === 'zh' ? '常见问题 • 快速解答' : 'FAQ • Quick Answers'}
              </span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {language === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            {language === 'zh' 
              ? '找到您关心的问题，如有其他疑问欢迎随时联系我们' 
              : 'Find answers to common questions, contact us anytime for other inquiries'}
          </p>
        </div>

        {/* 分类筛选 */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#7dd3fc] text-black font-medium'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category[language]}
            </button>
          ))}
        </div>

        {/* FAQ 列表 */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredItems.map((item, index) => (
            <FAQAccordion key={index} item={item} index={index} />
          ))}
        </div>

        {/* 联系提示 */}
        <div className={`text-center mt-16 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400 mb-6">
            {language === 'zh' 
              ? '没有找到您关心的问题？' 
              : 'Didn\'t find your question?'}
          </p>
          <a href="#contact" className="btn-primary inline-block">
            {language === 'zh' ? '联系我们' : 'Contact Us'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
