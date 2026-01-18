
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const Company: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 bg-[#fffaf0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pr-40 transition-all duration-500">
        <header className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2 tracking-wide font-maru">Company</h1>
          <p className="text-orange-600 font-medium tracking-widest text-sm font-maru">会社概要</p>
        </header>

        <div className="bg-white shadow-lg rounded-2xl overflow-hidden mb-16 border border-black/5">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-black pl-4 mb-8 font-maru">
              会社情報
            </h2>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1 border-b border-gray-50 pb-4">
                <dt className="text-sm font-medium text-gray-400">商号</dt>
                <dd className="mt-1 text-lg text-gray-900 font-bold font-maru">{COMPANY_INFO.name}</dd>
              </div>
              <div className="sm:col-span-1 border-b border-gray-50 pb-4">
                <dt className="text-sm font-medium text-gray-400">代表取締役</dt>
                <dd className="mt-1 text-lg text-gray-900 font-bold font-maru">{COMPANY_INFO.ceo}</dd>
              </div>
              <div className="sm:col-span-1 border-b border-gray-50 pb-4">
                <dt className="text-sm font-medium text-gray-400">設立</dt>
                <dd className="mt-1 text-lg text-gray-900 font-bold">{COMPANY_INFO.establishment}</dd>
              </div>
              <div className="sm:col-span-1 border-b border-gray-50 pb-4">
                <dt className="text-sm font-medium text-gray-400">資本金</dt>
                <dd className="mt-1 text-lg text-gray-900 font-bold">{COMPANY_INFO.capital}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-400">業務内容</dt>
                <dd className="mt-1 text-lg text-gray-900 font-medium">{COMPANY_INFO.business}</dd>
              </div>
            </dl>
          </div>
        </div>

        <section className="bg-white rounded-2xl p-8 sm:p-12 text-gray-800 border border-black/10 shadow-sm">
          <div className="text-left mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black font-maru">Contact</h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              番組のご感想、その他お問い合わせはこちらからお願いいたします。
            </p>
          </div>

          {isSubmitted ? (
             <div className="bg-[#fffaf0] rounded-xl p-8 text-center animate-fade-in-up border border-black/5 shadow-inner">
                <div className="text-5xl mb-4">🍊</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 font-maru">送信完了（デモ）</h3>
                <p className="text-gray-600 mb-4 text-base">
                  お問い合わせありがとうございます。<br/>
                  <span className="font-bold bg-black text-white px-3 py-1.5 rounded-full inline-block mt-4 text-xs">
                    ※現在はデモのため送信されません
                  </span>
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-sm underline hover:text-black text-gray-400 transition-colors"
                >
                  フォームに戻る
                </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">お名前</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/5 transition-shadow"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">メールアドレス</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/5 transition-shadow"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">お問い合わせ内容</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/5 resize-none transition-shadow"
                  placeholder="メッセージを入力してください"
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-block bg-[#ffca80] text-white font-bold py-4 px-16 rounded-full hover:bg-[#ffbd66] shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  送信する
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default Company;
