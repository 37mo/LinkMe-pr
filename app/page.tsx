'use client';

import { useState } from 'react';

export default function LinkMePressRelease() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/register', {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-pink-500 font-pacifico">LinkMe</div>
            <div className="text-sm text-gray-600 bg-pink-100 px-3 py-1 rounded-full">プレスリリース</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 mb-8 border border-pink-100">
          <div className="text-center mb-8">
            <div className="text-sm text-pink-500 font-medium mb-4 bg-pink-50 px-4 py-2 rounded-full inline-block">
              ✨ PRESS RELEASE ✨
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-relaxed">
              あなたにぴったりのイベントが、 
              <br />
              もう探さなくても見つかる 💫
              <br />
              <br />
              イベントマッチングアプリ
              <br />
              「LinkMe（リンクミー）」登場 🎉
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed bg-yellow-50 p-4 rounded-2xl">
              新しい街でも、自分に合った出会いを。
              <br />
              LinkMeが、あなたにぴったりのイベントを提案します 💕
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <img 
              src="https://static.readdy.ai/image/41558152d6f267d370b9c0eb09d64528/cbdebc5051ca753c8d5d6b030380d1f6.png"
              alt="LinkMeの漫画説明"
              className="w-full max-w-2xl rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm p-8 border border-blue-100">
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💡</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  革新的なマッチング機能 <span className="ml-2">✨</span>
                </h2>
                <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-xl">
                  LinkMeは、ユーザーの価値観や興味関心に基づいて、自動的にイベントをレコメンドするマッチング型イベントアプリです 📱
                  イベントを探す手間も、「自分に合うかわからない」という不安も、もう不要。
                  東京での新生活を始めたばかりのあなたにも、自然な出会いと安心できる繋がりを届けます 🌸
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm p-8 border border-purple-100">
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👤</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  ユーザーの声：山下薫さんの体験 <span className="ml-2">💭</span>
                </h2>
                <p className="text-gray-700 leading-relaxed bg-purple-50 p-4 rounded-xl">
                  例えば、26歳の山下薫さん。九州から上京し、慣れない仕事と暮らしの中で「友達を作りたい」と思いながらも、どこから始めたらいいか分からずにいました 😅
                  イベントはたくさんあるけれど、選ぶのが面倒だし、ネットワークビジネスやマルチ商法に巻き込まれるのも怖い——そんな不安が行動を止めてしまうのです 😰
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm p-8 border border-green-100">
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🛡️</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  安心・安全な解決策 <span className="ml-2">🌟</span>
                </h2>
                <p className="text-gray-700 leading-relaxed bg-green-50 p-4 rounded-xl">
                  LinkMeでは、事前に設定した興味関心・価値観・性格タイプに基づいて、信頼できる主催者のイベントを自動でおすすめ 🎯
                  あらかじめ選別されたイベントだけが表示されるため、安心して選ぶことができます。
                  参加後にはフィードバックも記録できるので、自分に合った出会いがどんどん精度高く提案されていきます 📈
                </p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-8 text-gray-800">
            <div className="text-center">
              <div className="text-5xl mb-4">💬</div>
              <blockquote className="text-xl font-medium mb-6 leading-relaxed">
                イベントは、ただの参加ではなく"人生のきっかけ"になる。LinkMeは、そんな瞬間を誰にでも届けたいと願っています ✨
              </blockquote>
              <cite className="text-pink-600 bg-pink-50 px-4 py-2 rounded-full">— LinkMeプロダクトマネージャー・中川</cite>
            </div>
          </div>

          {/* How to Start */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm p-8 border border-orange-100">
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  簡単な始め方 <span className="ml-2">🎈</span>
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 bg-orange-50 p-4 rounded-xl">
                  アプリをダウンロードして、まずは簡単な性格診断に回答するだけ 📝
                  興味のあるカテゴリを選ぶと、今週末にぴったりのイベントがすぐに届きます。
                  ひとり参加でも安心のフォロー体制も 🤗
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-blue-100 px-4 py-2 rounded-full text-blue-700 font-medium text-sm">
                    📱 簡単登録
                  </div>
                  <div className="bg-purple-100 px-4 py-2 rounded-full text-purple-700 font-medium text-sm">
                    🧠 性格診断
                  </div>
                  <div className="bg-green-100 px-4 py-2 rounded-full text-green-700 font-medium text-sm">
                    📅 即座にマッチング
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Testimonial */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm p-8 border border-pink-100">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">😊</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  お客様の声 <span className="ml-2">💝</span>
                </h2>
                <div className="bg-pink-50 p-6 rounded-2xl border-2 border-dashed border-pink-200">
                  <p className="text-gray-700 leading-relaxed italic mb-4 text-lg">
                    「まさに今の自分にぴったりなイベントが届いたのに驚きました。おかげで、東京で初めて"居場所"を感じられた気がします 🥰」
                  </p>
                  <div className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full inline-block">
                    26歳・女性・会社員 ✨
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Information */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm p-8 border border-indigo-100">
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">ℹ️</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  サービス詳細 <span className="ml-2">📋</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-blue-50 p-3 rounded-xl">
                    <span className="text-xl">💻</span>
                    <span className="text-gray-700">アプリは現状webで利用可能。今後iOSおよびAndroidで展開予定。</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-xl">
                    <span className="text-xl">🔒</span>
                    <span className="text-gray-700">イベント主催者の審査制を導入しており、安心・安全な場づくりを徹底しています。</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-registration Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 text-center mt-12 shadow-lg border border-pink-100">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">LinkMeで新しい出会いを始めませんか？</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            あなたにぴったりのイベントが、自動的に見つかります。東京での新しい生活を、もっと豊かに 🌈
          </p>
          
          {/* Pre-registration Form */}
          <div className="bg-pink-50 rounded-2xl p-8 max-w-md mx-auto mb-6 border border-pink-200">
            <h3 className="text-xl font-bold mb-4 text-gray-800">✨ 先行登録受付中 ✨</h3>
            <p className="text-gray-700 text-sm mb-6">
              先行登録は<span className="font-bold text-pink-600">完全無料</span>！リリース時にご連絡し、<br />
              <span className="font-bold text-pink-600">お得な特典</span>をご用意しています 🎁
            </p>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-pink-600 mb-2">登録完了！</h3>
                <p className="text-gray-700">
                  確認メールをお送りしました。<br />
                  リリース時にご連絡いたします 💕
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    placeholder="メールアドレスを入力"
                    className="w-full px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300 border border-pink-200"
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
                    className="w-full px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300 border border-pink-200"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-700 transition-colors cursor-pointer shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '送信中...' : '🚀 無料で先行登録する'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-200 to-yellow-200 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold mb-4 font-pacifico text-pink-600">LinkMe</div>
          <p className="text-gray-700 mb-6">あなたにぴったりのイベントをお届けします 💕</p>
    
          <div className="mt-8 pt-8 border-t border-pink-300 text-gray-600 text-sm">
            <div className="mb-2">
              運営会社：
              <a 
                href="https://37mo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 font-medium hover:underline"
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
