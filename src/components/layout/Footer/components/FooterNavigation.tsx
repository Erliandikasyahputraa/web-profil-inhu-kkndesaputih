import { Grid, Stack } from '@/components/layout';
import { Heading, Body } from '@/components/typography';
import type { FooterNavigationProps } from '../Footer.types';

export function FooterNavigation({ about, navigation, contact, socials }: FooterNavigationProps) {
  return (
    <Grid variant="gallery" spacing="grid" className="py-24">
      {/* About */}
      <Stack spacing="content" className="lg:col-span-4 lg:pr-12">
        <Heading level={4} variant="standard">{about.title}</Heading>
        <Body tone="muted">{about.description}</Body>
      </Stack>
      
      {/* Navigation */}
      <Stack spacing="content" className="lg:col-span-2">
        <Heading level={4} variant="standard">{navigation.title}</Heading>
        <Stack spacing="paragraph" as="ul">
          {navigation.links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-sans text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </Stack>
      </Stack>

      {/* Contact */}
      <Stack spacing="content" className="lg:col-span-4">
        <Heading level={4} variant="standard">{contact.title}</Heading>
        <Stack spacing="inline" as="ul">
          {contact.details.map((detail) => (
            <li key={detail} className="font-sans text-[var(--color-muted)]">
              {detail}
            </li>
          ))}
        </Stack>
      </Stack>

      {/* Socials */}
      <Stack spacing="content" className="lg:col-span-2">
        <Heading level={4} variant="standard">{socials.title}</Heading>
        <Stack spacing="paragraph" as="ul">
          {socials.links.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href} 
                className="font-sans text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </Stack>
      </Stack>
    </Grid>
  );
}
