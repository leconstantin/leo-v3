import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { certificates } from '@/lib/config';

export function CertificateList() {
  return (
    <div className="mx-5 max-w-2xl sm:mx-0 lg:max-w-6xl">
      {certificates.map((certificate) => (
        <div className="mt-20 mb-7" key={certificate.category}>
          <h2 className="mb-12 font-bold text-xl tracking-tight lg:text-2xl">
            {certificate.category}
          </h2>
          {certificate.certificates.map((item) => (
            <div
              className="mb-4 rounded-md border p-4 text-foreground text-sm leading-6"
              key={item.title}
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-1 items-center">
                  <div className="flex-shrink-0">
                    <Image
                      alt={item.subtitle}
                      className="object-cover"
                      height={72}
                      src={item.image}
                      width={95}
                    />
                  </div>
                  <div className="flex-1 pl-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.organization}</p>
                  </div>
                </div>
                <Button
                  asChild
                  className="border border-teal-300"
                  variant="outline"
                >
                  <a
                    className="mt-4 sm:mt-0 sm:ml-4"
                    href={item.link}
                    target="_blank"
                  >
                    View Certificate
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
