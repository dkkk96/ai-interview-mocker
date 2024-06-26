
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://ai-interview-mocker_owner:v5mDa3oKsMrU@ep-morning-mountain-a58ppm6l.us-east-2.aws.neon.tech/ai_interview_mocker_db?sslmode=require',
  }
};