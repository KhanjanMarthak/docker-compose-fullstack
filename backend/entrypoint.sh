npm install
npx sequelize db:migrate --config config/config.js
npx sequelize db:seed --seed ./backend/seeders/20220630094531-create-user.js
npm run dev