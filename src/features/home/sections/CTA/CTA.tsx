import { Container } from '../../../../components/ui/Container';
import { FadeIn } from '../../../../components/motion';
import { ClosingStatement } from './components/ClosingStatement';
import { ClosingImage } from './components/ClosingImage';
import { ClosingActions } from './components/ClosingActions';
import { ctaContent } from '../../../../content/homepage/cta';

export function CTA() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden py-32 mt-32">
      <ClosingImage src={ctaContent.image} alt={ctaContent.imageAlt} />
      <div className="absolute inset-0 bg-stone-900/40" />
      
      <Container size="default" className="relative z-10 flex flex-col items-center justify-center">
        <FadeIn>
          <ClosingStatement 
            text={ctaContent.statement} 
            description={ctaContent.description} 
          />
        </FadeIn>
        <FadeIn delay={0.2} className="mt-16 w-full">
          <ClosingActions actions={ctaContent.actions} />
        </FadeIn>
      </Container>
    </section>
  );
}
