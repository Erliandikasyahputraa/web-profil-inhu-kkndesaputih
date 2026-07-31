import { Container } from '../../ui/Container';
import { FooterQuote } from './components/FooterQuote';
import { FooterNavigation } from './components/FooterNavigation';
import { FooterBottom } from './components/FooterBottom';
import { footerContent } from '../../../content/layout/footer';

export function Footer() {
  return (
    <footer className="w-full bg-stone-50 border-t border-stone-200 mt-auto">
      <Container size="default">
        <FooterQuote quote={footerContent.quote} />
        <FooterNavigation 
          about={footerContent.about}
          navigation={footerContent.navigation}
          contact={footerContent.contact}
          socials={footerContent.socials}
        />
        <FooterBottom 
          copyright={footerContent.bottom.copyright}
          credit={footerContent.bottom.credit}
        />
      </Container>
    </footer>
  );
}
