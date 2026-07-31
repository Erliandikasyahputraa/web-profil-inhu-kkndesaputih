import type { FooterNavigationProps } from '../Footer.types';

export function FooterNavigation({ about, navigation, contact, socials }: FooterNavigationProps) {
  return (
    <div className="py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
      {/* About */}
      <div className="lg:col-span-4 flex flex-col space-y-6 lg:pr-12">
        <h3 className="font-heading text-xl text-stone-900 tracking-wide font-medium">{about.title}</h3>
        <p className="font-sans text-stone-600 leading-relaxed lg:max-w-sm">{about.description}</p>
      </div>
      
      {/* Navigation */}
      <div className="lg:col-span-2 flex flex-col space-y-6">
        <h3 className="font-heading text-xl text-stone-900 tracking-wide font-medium">{navigation.title}</h3>
        <ul className="flex flex-col space-y-4">
          {navigation.links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-sans text-stone-600 hover:text-stone-900 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="lg:col-span-4 flex flex-col space-y-6">
        <h3 className="font-heading text-xl text-stone-900 tracking-wide font-medium">{contact.title}</h3>
        <ul className="flex flex-col space-y-2">
          {contact.details.map((detail) => (
            <li key={detail} className="font-sans text-stone-600">
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Socials */}
      <div className="lg:col-span-2 flex flex-col space-y-6">
        <h3 className="font-heading text-xl text-stone-900 tracking-wide font-medium">{socials.title}</h3>
        <ul className="flex flex-col space-y-4">
          {socials.links.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href} 
                className="font-sans text-stone-600 hover:text-stone-900 transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
