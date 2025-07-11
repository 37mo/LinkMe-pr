import { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_HOST_API_KEY);

export const handler: Handler = async (event) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { email, name } = JSON.parse(event.body || "{}");

    // API key の存在確認
    if (!process.env.RESEND_HOST_API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "サーバー設定エラー: 主催者用API Key が設定されていません",
        }),
      };
    }

    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "メールアドレスが必要です" }),
      };
    }

    // 主催者登録の確認メールを送信
    const { data, error } = await resend.emails.send({
      from: "LinkMe for Hosts <linkme@37mo.com>",
      to: [email],
      subject: "🎯 LinkMe for Hosts 主催者登録ありがとうございます！",
      html: `
        <div style="font-family: 'Noto Sans JP', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(to bottom right, #eff6ff, #dbeafe);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #60a5fa; font-size: 28px; margin-bottom: 10px;">LinkMe for Hosts</h1>
            <p style="color: #666; font-size: 16px;">質の高い参加者だけが集まるイベント主催を実現</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #60a5fa; font-size: 24px; margin-bottom: 20px; text-align: center;">🎯 主催者登録ありがとうございます！</h2>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              ${name ? `${name}さん、` : ""}この度はLinkMe for Hostsの主催者登録をしていただき、ありがとうございます！
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              LinkMe for Hostsは、AIマッチング技術により、あなたのイベントに本当に興味を持つ参加者だけを自動的に集客するプラットフォームです。
            </p>
            
            <div style="background: linear-gradient(to right, #eff6ff, #dbeafe); padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #60a5fa; font-size: 18px; margin-bottom: 15px;">✨ 主催者向け特典 ✨</h3>
              <ul style="color: #333; font-size: 16px; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li>優先的なサービス開始案内</li>
                <li>初回イベント主催時の特別サポート</li>
                <li>β版テスト参加権（フィードバック特典付き）</li>
                <li>主催者向け限定セミナーへの無料参加</li>
                <li>集客コンサルティング初回無料相談</li>
              </ul>
            </div>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #60a5fa;">
              <h3 style="color: #60a5fa; font-size: 18px; margin-bottom: 15px;">🚀 今後の流れ</h3>
              <ol style="color: #333; font-size: 16px; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li><strong>サービス準備完了通知：</strong>リリース1週間前にご連絡</li>
                <li><strong>主催者向け説明会：</strong>使い方とコツをご紹介</li>
                <li><strong>イベント企画サポート：</strong>初回は無料でコンサル</li>
                <li><strong>サービス開始：</strong>すぐにイベント作成可能</li>
              </ol>
            </div>
            
            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #92400e; font-size: 14px; margin: 0; text-align: center;">
                <strong>💡 ヒント:</strong> 質の高いイベント主催のためのガイドラインも後日お送りします
              </p>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              「気の合う人だけが集まる」理想的なイベント主催を一緒に実現しましょう！<br>
              ご質問やご不明な点がございましたら、お気軽にお問い合わせください 💙
            </p>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666; font-size: 14px;">
                運営会社：株式会社みなも<br>
                <a href="https://37mo.com/" style="color: #60a5fa; text-decoration: none;">https://37mo.com/</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "メール送信に失敗しました",
          details: error.message || error,
        }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "主催者登録が完了しました。確認メールをお送りしました。",
        emailId: data?.id,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "エラーが発生しました" }),
    };
  }
};
