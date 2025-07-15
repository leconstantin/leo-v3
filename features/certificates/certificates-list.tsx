import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { certificates } from '@/lib/config';
export function CertificateList() {
  return (
    <section className="relative border-grid">
      <PageHeader className="text-left ">
        <div className=" mx-auto flex w-full max-w-5xl flex-col ">
          {certificates.map((certificate) => (
            <div className="mt-20 mb-7" key={certificate.category}>
              <h2 className="mb-12 font-bold text-xl tracking-tight lg:text-2xl">
                {certificate.category}
              </h2>
              <div className="flex flex-col justify-center gap-6">
                {certificate.certificates.map((item) => (
                  <div
                    className="rounded-md border p-4 text-foreground text-sm"
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
                        <div className="flex flex-1 flex-col gap-2 pl-4 md:gap-3">
                          <a
                            className="font-semibold text-lg leading-tight tracking-tighter"
                            href={item.link}
                            target="_blank"
                          >
                            {item.title}
                          </a>
                          <p className="text-muted-foreground">
                            {item.organization}
                          </p>
                        </div>
                      </div>
                      <Button
                        asChild
                        className=" hidden items-center justify-center md:flex"
                        size={'icon'}
                        variant="ghost"
                      >
                        <a href={item.link} target="_blank">
                          <ExternalLinkIcon className="size-4" />
                          <span className="sr-only">View Certificate</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageHeader>
    </section>
  );
}
