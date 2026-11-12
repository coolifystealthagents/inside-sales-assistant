import Image from 'next/image';
import type { SiteImage } from '@/lib/site-imagery';

export function ContextImage({ image, className = '', priority = false }: { image: SiteImage; className?: string; priority?: boolean }) {
  return <figure className={`context-image ${className}`.trim()}>
    <Image
      src={image.src}
      alt={image.alt}
      width={2400}
      height={1600}
      priority={priority}
      sizes="(max-width: 900px) 100vw, 50vw"
      style={{ objectPosition: image.position }}
    />
  </figure>;
}
