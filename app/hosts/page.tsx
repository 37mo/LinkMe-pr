'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LinkMeHostsPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/.netlify/functions/register-host', {
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
      console.error('Host registration error:', error);
      alert(`主催者登録エラー: ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-400 font-pacifico hover:text-blue-500 transition-colors">
              LinkMe for Hosts
            </Link>
            <div className="flex items-center space-x-3">
              <Link href="/" className="text-xs sm:text-sm text-gray-600 hover:text-blue-400 transition-colors">
                参加者向け
              </Link>
              <Link href="/faq" className="text-xs sm:text-sm text-gray-600 hover:text-blue-400 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-12">
        {/* Hero Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-3xl shadow-lg p-3 sm:p-8 mb-4 sm:mb-8 border border-blue-100">
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-xs sm:text-sm text-blue-400 font-medium mb-3 sm:mb-4 bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block">
              ✨ PRESS RELEASE ✨
            </div>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-6 leading-tight sm:leading-relaxed px-1">
              '気の合う人だけが集まる'を叶える
              <br />
              安心とつながりのイベント主催をサポートする
              <br />
              <br />
              「LinkMe for Hosts」登場 🎯
            </h1>
            <p className="text-sm sm:text-xl text-gray-600 leading-relaxed bg-blue-50 p-2.5 sm:p-4 rounded-lg sm:rounded-2xl">
              主催者のあなたと、本当に参加したい人を繋ぐ
              <br />
              新しいイベント主催プラットフォーム 💙
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-3 sm:space-y-6">
          {/* Section 1 - Sub Header */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
                  質の高い参加者だけが集まる仕組み <span className="ml-2">✨</span>
                </h2>
                <p className="text-xs sm:text-base text-gray-700 leading-relaxed bg-blue-50 p-2.5 sm:p-4 rounded-lg sm:rounded-xl text-left">
                  従来のイベント告知では「とりあえず人数を集める」ことが重視されがちでした 📢
                  しかし本当に大切なのは、イベントの趣旨に共感し、積極的に参加したい人が集まることです。
                  LinkMe for Hostsは、主催者の想いと参加者の興味関心を丁寧にマッチングし、「気の合う人だけが集まる」理想的なイベントづくりを実現します 🌟
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 - Problem Statement */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                <span className="text-2xl">😰</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
                  イベント主催者が抱える課題 <span className="ml-2">💭</span>
                </h2>
                <p className="text-xs sm:text-base text-gray-700 leading-relaxed bg-blue-50 p-2.5 sm:p-4 rounded-lg sm:rounded-xl text-left">
                  「集客に時間がかかる」「告知した人数の半分しか来ない」「ネットワークビジネス目的の人が紛れ込む」「参加者同士の相性が合わない」など、イベント主催には多くの課題があります 😔
                  特に個人や小規模団体での主催では、適切な参加者を見つけるのが困難で、せっかく企画したイベントが思うような成果を上げられないケースが後を絶ちません 📉
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 - Solution Overview */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                <span className="text-2xl">💡</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
                  LinkMe for Hostsが提供する解決策 <span className="ml-2">🚀</span>
                </h2>
                <p className="text-xs sm:text-base text-gray-700 leading-relaxed bg-blue-50 p-2.5 sm:p-4 rounded-lg sm:rounded-xl text-left">
                  AIマッチング技術により、あなたのイベントに本当に興味を持つ参加者だけを自動的に集客 🤖
                  事前の参加者プロフィール確認、主催者とのチャット機能、参加者同士の相性診断など、質の高いイベント体験を支える機能が充実しています。
                  もう「人数合わせ」ではない、本当に意味のあるイベント運営が可能になります ✨
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 - Key Features */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
                  主な機能と特徴 <span className="ml-2">🔧</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-blue-50 p-3 rounded-xl">
                    <span className="text-xl">🎯</span>
                    <span className="text-gray-700"><strong>スマートマッチング：</strong>AI が参加者の興味関心とイベント内容を自動分析し、最適な参加者を集客</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-blue-50 p-3 rounded-xl">
                    <span className="text-xl">📊</span>
                    <span className="text-gray-700"><strong>詳細なプロフィール表示：</strong>参加者の背景や参加動機を事前に確認可能</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-blue-50 p-3 rounded-xl">
                    <span className="text-xl">💬</span>
                    <span className="text-gray-700"><strong>主催者専用チャット：</strong>事前の質問対応や参加確認がスムーズに</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-blue-50 p-3 rounded-xl">
                    <span className="text-xl">🛡️</span>
                    <span className="text-gray-700"><strong>安全性担保機能：</strong>ネットワークビジネス等の不適切な参加者を自動検出・除外</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 - Host Testimonial */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                <span className="text-2xl sm:text-3xl">👩‍💼</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
                  主催者の声 <span className="ml-2">💼</span>
                </h2>
                <div className="bg-blue-50 p-6 rounded-2xl border-2 border-dashed border-blue-200">
                  <p className="text-gray-700 leading-relaxed italic mb-4 text-lg">
                    「これまで20人集客のために100人にアプローチしていましたが、LinkMe for Hostsでは本当に興味を持つ15人が自然と集まりました。イベントの質も満足度も格段に向上して、継続開催が楽しくなりました！ 😊」
                  </p>
                  <div className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full inline-block">
                    読書会主催・田中さん（32歳） 📚
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-blue-100 to-sky-200 rounded-2xl p-8 text-gray-800">
            <div className="text-center">
              <div className="text-5xl mb-4">💙</div>
              <blockquote className="text-xl font-medium mb-6 leading-relaxed">
                本当に価値あるイベントは、適切な人が適切な場所に集まった時に生まれる。LinkMe for Hostsは、そんな"奇跡の瞬間"を確実に創り出します ✨
              </blockquote>
              <cite className="text-blue-400 bg-blue-50 px-4 py-2 rounded-full">— LinkMe for Hosts プロダクトリード・佐藤</cite>
            </div>
          </div>

          {/* Section 6 - Pricing & Model */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                <span className="text-2xl">💰</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
                  シンプルで透明な料金体系 <span className="ml-2">💳</span>
                </h2>
                <p className="text-xs sm:text-base text-gray-700 leading-relaxed bg-blue-50 p-2.5 sm:p-4 rounded-lg sm:rounded-xl text-left">
                  月額固定費は一切不要 🆓 有料イベントの場合のみ、売上の20%を成功報酬としていただく完全成果報酬型です。
                  無料イベントの主催は完全無料で利用可能。初期費用やシステム利用料もかからないため、気軽に始められます。
                  「成功した分だけお支払い」の安心設計で、主催者のリスクを最小限に抑えています 🛡️
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 - How to Get Started */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-8 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start">
                  簡単な始め方 <span className="ml-2">📝</span>
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 bg-blue-50 p-4 rounded-xl">
                  主催者登録は5分で完了 ⏰ プロフィール入力とイベント企画を提出いただくだけで、AIが最適な参加者マッチングを開始します。
                  審査通過後、すぐにイベント募集がスタート。集客からイベント実施まで、すべてプラットフォーム内で完結します 🎯
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                  <div className="bg-blue-100 px-3 sm:px-4 py-2 rounded-full text-blue-500 font-medium text-xs sm:text-sm">
                    📋 主催者登録
                  </div>
                  <div className="bg-blue-100 px-3 sm:px-4 py-2 rounded-full text-blue-500 font-medium text-xs sm:text-sm">
                    🔍 審査・承認
                  </div>
                  <div className="bg-blue-100 px-3 sm:px-4 py-2 rounded-full text-blue-500 font-medium text-xs sm:text-sm">
                    🎯 自動集客開始
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Host Registration Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-3xl p-4 sm:p-12 text-center mt-6 sm:mt-12 shadow-lg border border-blue-100">
          <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">🎯</div>
          <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-800 px-1">理想的なイベント主催を始めませんか？</h2>
          <p className="text-xs sm:text-base text-gray-600 mb-3 sm:mb-6 max-w-2xl mx-auto px-1 leading-relaxed">
            質の高い参加者だけが集まる、新しいイベント主催体験をお試しください 🌟
          </p>
          
          {/* Host Registration Form */}
          <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-3 sm:p-8 max-w-sm sm:max-w-md mx-auto mb-3 sm:mb-6 border border-blue-200">
            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4 text-gray-800">✨ 主催者登録受付中 ✨</h3>
            <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-6 leading-relaxed">
              主催者登録は<span className="font-bold text-blue-400">完全無料</span>！<br className="sm:hidden" />リリース時にご連絡し、<br />
              <span className="font-bold text-blue-400">特別サポート</span>をご提供します 🎁
            </p>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">登録完了！</h3>
                <p className="text-gray-700">
                  確認メールをお送りしました。<br />
                  リリース時にご連絡いたします 💙
                </p>
              </div>
            ) : (
              <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    placeholder="メールアドレスを入力"
                    className="w-full px-4 py-4 sm:py-3 text-base sm:text-sm rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 border border-blue-200"
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
                    className="w-full px-4 py-4 sm:py-3 text-base sm:text-sm rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 border border-blue-200"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-400 text-white px-6 py-4 sm:py-3 text-base sm:text-sm rounded-full font-bold hover:bg-blue-500 active:bg-blue-600 transition-colors cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] sm:min-h-[auto]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '送信中...' : '🚀 無料で主催者登録する'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-100 to-sky-200 py-6 sm:py-12">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 text-center">
          <div className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4 font-pacifico text-blue-400">LinkMe for Hosts</div>
          <p className="text-xs sm:text-base text-gray-700 mb-3 sm:mb-6 px-1">質の高い参加者だけが集まるイベント主催を実現 💙</p>
    
          <div className="mt-4 sm:mt-8 pt-4 sm:pt-8 border-t border-blue-200 text-gray-600 text-xs sm:text-sm">
            <div className="mb-2">
              運営会社：
              <a 
                href="https://37mo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 font-medium hover:underline"
              >
                株式会社みなも
              </a>
            </div>
            <div>
              2025 LinkMe for Hosts. All rights reserved. 💙
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
