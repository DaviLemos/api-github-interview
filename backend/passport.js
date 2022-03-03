const GithubStrategy = require('passport-github2').Strategy;
const passport = require('passport');

passport.use(
  new GithubStrategy(
    {
      clientID: '497718fcad8640983aa4',
      clientSecret: 'ac3122177f032a64ac51f0042077e3cb464aee95',
      callbackURL: '/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
