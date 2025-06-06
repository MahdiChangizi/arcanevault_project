import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'; // always use @mui/material instead of @mui/system

import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import { FormattedMessage } from 'react-intl';
import { getAppConfig } from '../services/app';
import { SocialMedia } from '../types/config';
import Link from './Link';
import GroupIcon from '@mui/icons-material/Group';

const appConfig = getAppConfig();

export function Footer() {
  const renderIcon = (media: SocialMedia) => {
    if (media.type === 'email') {
      return <EmailIcon />;
    } else if (media.type === 'twitter') {
      return <TwitterIcon />;
    } else if (media.type === 'telegram') {
      return <TelegramIcon />;
    } else if (media.type === 'telegram_group') {
      return <GroupIcon />;
    }
  };

  const renderLink = (media: SocialMedia) => {
    if (media.type === 'email') {
      return `mailto:ask@arcanevault.xyz`;
    } else if (media.type === 'twitter') {
      return `https://x.com/ArcaneVault_xyz`;
    } else if (media.type === 'telegram') {
      return `https://t.me/ArcaneVault_News`;
    } else if (media.type === 'telegram_group') {
      return `https://t.me/ArcaneVault_xyz`;
    }

    return '';
  };

  return (
    <Box py={1} sx={{ bgcolor: (theme) => theme.palette.background.paper }}>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          spacing={1}
          sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        >
          <Grid sx={{ display: 'flex', alignItems: 'center', gap: 1 }} item>
          <img
                style={{
                  padding: '10px',
                }}
                src="favicon.ico"
                alt={appConfig.name}
                title={appConfig.name}
                width="110px"
                height="105px"
              />
            <Link
              href=""
              color="inherit"
              target="_blank"
            >
              <FormattedMessage
                id="contact.us"
                defaultMessage="Contact us"
                description="Contact us"
              />
            </Link>
          </Grid>
          <Grid item>
            {/* <Typography variant="body1" align="center">
              <Link href="/" color="primary">
                {appConfig.name}
              </Link>{' '}
              <FormattedMessage
                defaultMessage="is powered by"
                id="is.powered.by"
                description="is powered by"
              />{' '}
              <Link variant="inherit" href="https://0x.org/" color="inherit">
                <strong>0x</strong>
              </Link>{' '}
              <FormattedMessage
                id="and.made.with.love.by"
                defaultMessage="and made with ❤️ by"
                description="and made with ❤️ by"
              />{' '}
              <Link
                variant="inherit"
                href="https://www.dexkit.com"
                target="_blank"
                color="inherit"
              >
                <strong>DexKit</strong>
              </Link>
            </Typography> */}
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={1}>
              {appConfig?.social &&
                appConfig.social.map((media, index) => (
                  <IconButton
                    key={index}
                    href={renderLink(media)}
                    LinkComponent={Link}
                    target="_blank"
                    size="small"
                  >
                    {renderIcon(media)}
                  </IconButton>
                ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
