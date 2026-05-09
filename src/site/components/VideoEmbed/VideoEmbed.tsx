import classes from "./VideoEmbed.module.css";

type VideoEmbedProps = {
  title: string;
  src?: string;
  posterSrc?: string;
};

function isDirectVideoSource(src: string) {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);
}

export default function VideoEmbed({ title, src, posterSrc }: VideoEmbedProps) {
  if (!src) {
    return (
      <div className={`${classes.VideoEmbed} ${classes.Empty}`} aria-label={title} />
    );
  }

  if (isDirectVideoSource(src)) {
    return (
      <div className={classes.VideoEmbed}>
        <video controls preload="metadata" poster={posterSrc} aria-label={title}>
          <source src={src} />
        </video>
      </div>
    );
  }

  return (
    <div className={classes.VideoEmbed}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
