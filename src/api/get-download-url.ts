import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function POST(request: Request) {
  const { id, type } = await request.json();

  const s3Client = new S3Client({
    region: "auto",
    endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID!,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
    },
  });

  const command = new GetObjectCommand({
    Bucket: "your-bucket-name",
    Key: `${type}s/${id}.mp4`,
  });

  try {
    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // URL expires in 1 hour
    return new Response(JSON.stringify({ signedUrl }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generating signed URL:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate download URL' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}