'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LinkMePressRelease() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/.netlify/functions/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setName('');
      } else {
        const error = await response.json();
        alert(error.error || '登録に失敗しました');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('エラーが発生しました');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-pink-400 font-pacifico">LinkMe</div>
            <div className="flex items-center space-x-3">
              <Link href="/hosts" className="text-xs sm:text-sm text-gray-600 hover:text-pink-400 transition-colors">
                主催者向け
              </Link>
              <Link href="/faq" className="text-xs sm:text-sm text-gray-600 hover:text-pink-400 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-12">
        {/* Hero Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-3xl shadow-lg p-3 sm:p-8 mb-4 sm:mb-8 border border-pink-100">
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-xs sm:text-sm text-pink-400 font-medium mb-3 sm:mb-4 bg-pink-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block">
              ✨ PRESS RELEASE ✨
            </div>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-6 leading-tight sm:leading-relaxed px-1">
              あなたにぴったりのイベントが、 
              <br />
              もう探さなくても見つかる 💫
              <br />
              <br />
              イベントマッチングアプリ
              <br />
              「LinkMe（リンクミー）」登場 🎉
            </h1>
            <p className="text-sm sm:text-xl text-gray-600 leading-relaxed bg-pink-50 p-2.5 sm:p-4 rounded-lg sm:rounded-2xl">
              新しい街でも、自分に合った出会いを。
              <br />
              LinkMeが、あなたにぴったりのイベントを提案します 💕
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <Image 
              src="/images/linkme-comic.png"
              alt="LinkMeの漫画説明"
              width={800}
              height={600}
              className="w-full max-w-2xl rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-3 sm:space-y-6">
          {/* Section 1 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-pink-100">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                <span className="text-2xl">💡</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
                  革新的なマッチング機能 <span className="ml-2">✨</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-pink-50 p-2.5 sm:p-4 rounded-lg sm:rounded-xl text-left">
                  LinkMeは、ユーザーの価値観や興味関心に基づいて、自動的にイベントをレコメンドするマッチング型イベントアプリです 📱
                  イベントを探す手間も、「自分に合うかわからない」という不安も、もう不要。
                  東京での新生活を始めたばかりのあなたにも、自然な出会いと安心できる繋がりを届けます 🌸
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-pink-100">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                <span className="text-2xl">👤</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
                  ユーザーの声：山下薫さんの体験 <span className="ml-2">💭</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-pink-50 p-2.5 sm:p-4 rounded-lg sm:rounded-xl text-left">
                  例えば、26歳の山下薫さん。九州から上京し、慣れない仕事と暮らしの中で「友達を作りたい」と思いながらも、どこから始めたらいいか分からずにいました 😅
                  イベントはたくさんあるけれど、選ぶのが面倒だし、ネットワークビジネスやマルチ商法に巻き込まれるのも怖い——そんな不安が行動を止めてしまうのです 😰
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-pink-100">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                <span className="text-2xl">🛡️</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
                  安心・安全な解決策 <span className="ml-2">🌟</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-pink-50 p-2.5 sm:p-4 rounded-lg sm:rounded-xl text-left">
                  LinkMeでは、事前に設定した興味関心・価値観・性格タイプに基づいて、信頼できる主催者のイベントを自動でおすすめ 🎯
                  あらかじめ選別されたイベントだけが表示されるため、安心して選ぶことができます。
                  参加後にはフィードバックも記録できるので、自分に合った出会いがどんどん精度高く提案されていきます 📈
                </p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-gray-800">
            <div className="text-center">
              <div className="text-3xl sm:text-5xl mb-3 sm:mb-4">💬</div>
              <blockquote className="text-sm sm:text-xl font-medium mb-4 sm:mb-6 leading-relaxed px-2">
                イベントは、ただの参加ではなく&ldquo;人生のきっかけ&rdquo;になる。
                <br />
                LinkMeは、そんな瞬間を誰にでも届けたいと願っています ✨
              </blockquote>
              <cite className="text-pink-400 bg-pink-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-sm">— LinkMeプロダクトマネージャー・岡本</cite>
            </div>
          </div>

          {/* How to Start */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-pink-100">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
                  簡単な始め方 <span className="ml-2">🎈</span>
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 bg-pink-50 p-4 rounded-xl">
                  アプリをダウンロードして、まずは簡単な性格診断に回答するだけ 📝
                  興味のあるカテゴリを選ぶと、今週末にぴったりのイベントがすぐに届きます。
                  ひとり参加でも安心のフォロー体制も 🤗
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                  <div className="bg-pink-100 px-3 sm:px-4 py-2 rounded-full text-pink-500 font-medium text-sm sm:text-sm">
                    📱 簡単登録
                  </div>
                  <div className="bg-pink-100 px-3 sm:px-4 py-2 rounded-full text-pink-500 font-medium text-sm sm:text-sm">
                    🧠 性格診断
                  </div>
                  <div className="bg-pink-100 px-3 sm:px-4 py-2 rounded-full text-pink-500 font-medium text-sm sm:text-sm">
                    📅 即座にマッチング
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Testimonial */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-pink-100">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                <span className="text-2xl sm:text-3xl">😊</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
                  お客様の声 <span className="ml-2">💝</span>
                </h2>
                <div className="bg-pink-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-dashed border-pink-200">
                  <p className="text-gray-700 leading-relaxed italic mb-3 sm:mb-4 text-sm sm:text-lg">
                    &ldquo;まさに今の自分にぴったりなイベントが届いたのに驚きました。おかげで、東京で初めて&lsquo;居場所&rsquo;を感じられた気がします 🥰&rdquo;
                  </p>
                  <div className="text-sm sm:text-sm text-gray-600 bg-white px-2 sm:px-3 py-1 rounded-full inline-block">
                    26歳・女性・会社員 ✨
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Information */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-pink-100">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                <span className="text-2xl">ℹ️</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
                  サービス詳細 <span className="ml-2">📋</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-pink-50 p-3 rounded-xl">
                    <span className="text-xl">💻</span>
                    <span className="text-gray-700">アプリは現状webで利用可能。今後iOSおよびAndroidで展開予定。</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-pink-50 p-3 rounded-xl">
                    <span className="text-xl">🔒</span>
                    <span className="text-gray-700">イベント主催者の審査制を導入しており、安心・安全な場づくりを徹底しています。</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-registration Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-3xl p-4 sm:p-12 text-center mt-6 sm:mt-12 shadow-lg border border-pink-100">
          <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">🎉</div>
          <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-800 px-1">LinkMeで新しい出会いを始めませんか？</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-6 max-w-2xl mx-auto px-1 leading-relaxed">
            あなたにぴったりのイベントが、自動的に見つかります。東京での新しい生活を、もっと豊かに 🌈
          </p>
          
          {/* Pre-registration Form */}
          <div className="bg-pink-50 rounded-xl sm:rounded-2xl p-3 sm:p-8 max-w-sm sm:max-w-md mx-auto mb-3 sm:mb-6 border border-pink-200">
            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4 text-gray-800">✨ 先行登録受付中 ✨</h3>
            <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-6 leading-relaxed">
              先行登録は<span className="font-bold text-pink-400">完全無料</span>！<br className="sm:hidden" />リリース時にご連絡し、<br />
              <span className="font-bold text-pink-400">お得な特典</span>をご用意しています 🎁
            </p>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-pink-400 mb-2">登録完了！</h3>
                <p className="text-gray-700">
                  確認メールをお送りしました。<br />
                  リリース時にご連絡いたします 💕
                </p>
              </div>
            ) : (
              <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    placeholder="メールアドレスを入力"
                    className="w-full px-4 py-4 sm:py-3 text-base sm:text-sm rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300 border border-pink-200"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="お名前（任意）"
                    className="w-full px-4 py-4 sm:py-3 text-base sm:text-sm rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300 border border-pink-200"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-400 text-white px-6 py-4 sm:py-3 text-base sm:text-sm rounded-full font-bold hover:bg-pink-500 active:bg-pink-600 transition-colors cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] sm:min-h-[auto]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '送信中...' : '🚀 無料で先行登録する'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Cross Page Links */}
        <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl sm:rounded-3xl p-4 sm:p-8 mt-6 sm:mt-12 shadow-sm border border-pink-100">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">その他のサービス</h2>
            <p className="text-sm sm:text-sm text-gray-600">LinkMeの全サービスをチェック</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {/* Hosts Link */}
            <Link href="/hosts" className="group">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300 hover:border-blue-200">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-800 group-hover:text-blue-500 transition-colors">LinkMe for Hosts</h3>
                    <p className="text-sm sm:text-sm text-blue-500">主催者向けサービス</p>
                  </div>
                </div>
                <p className="text-sm sm:text-sm text-gray-600 leading-relaxed">
                  質の高い参加者だけが集まるイベント主催を実現。AIマッチング技術で理想的な集客を。
                </p>
              </div>
            </Link>

            {/* FAQ Link */}
            <Link href="/faq" className="group">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-pink-100 hover:shadow-md transition-all duration-300 hover:border-pink-200">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">❓</span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-800 group-hover:text-pink-500 transition-colors">よくある質問</h3>
                    <p className="text-sm sm:text-sm text-pink-500">FAQ・サポート</p>
                  </div>
                </div>
                <p className="text-sm sm:text-sm text-gray-600 leading-relaxed">
                  LinkMeについてのよくあるご質問と回答。安心してサービスをご利用いただけます。
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-100 to-pink-200 py-6 sm:py-12">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 text-center">
          <div className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4 font-pacifico text-pink-400">LinkMe</div>
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-6 px-1">あなたにぴったりのイベントをお届けします 💕</p>
    
          <div className="mt-4 sm:mt-8 pt-4 sm:pt-8 border-t border-pink-200 text-gray-600 text-xs sm:text-sm">
            <div className="mb-2">
              運営会社：
              <a 
                href="https://37mo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-600 font-medium hover:underline"
              >
                株式会社みなも
              </a>
            </div>
            <div>
              2025 LinkMe. All rights reserved. 🌸
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
