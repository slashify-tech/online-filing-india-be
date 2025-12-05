module.exports = {
    apps: [
      {
        name: "online-filing-india-api",
        post_update: ["npm install", "npm run build"],
        script: "build/server.js" ,       // compiled JS output
        cwd: "./",                   // project root
        instances: 1,                    // or 'max' for cluster mode
        exec_mode: "fork",
        env: {
          NODE_ENV: "development"
        },
        env_production: {
          NODE_ENV: "production"
        },
        watch: false,                    // keep false in production
        out_file: "./logs/out.log",
        error_file: "./logs/error.log",
        log_date_format: "YYYY-MM-DD HH:mm:ss"
      }
    ]
  };
  