import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { SocksProxyAgent } from 'socks-proxy-agent';

const Agent = new SocksProxyAgent('socks5://127.0.0.1:7890')

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '421300083691-jfho3r7402fk66g18ja98vtjh0277k8c.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/user/callback/google',
      scope: ['email', 'profile'],
    });
    this._oauth2.setAgent(Agent);
  }

  validate(accessToken: string, refreshToken: string, profile: any) {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    return user;
  }
}
