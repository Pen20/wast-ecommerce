import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  tls: {}, // Required for Upstash
});

async function testRedis() {
  try {
    await redis.set("test-key", "working!");
    const value = await redis.get("test-key");
    console.log("✅ Redis working. Value:", value);
    redis.disconnect();
  } catch (err) {
    console.error("❌ Redis error:", err);
  }
}

testRedis();
