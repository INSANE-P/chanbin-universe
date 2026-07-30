import HangingProp from "./HangingProp";

export type PhotoData = { src: string; caption: string };

// 실에 매달린 폴라로이드. 무대 소품처럼 살짝 기울어져 있어요.
export default function Photo({
  photo,
  index = 0,
  width = 210,
}: {
  photo: PhotoData;
  index?: number;
  width?: number;
}) {
  const tilt = index % 2 === 0 ? -2.2 : 2;
  return (
    <HangingProp
      threads={1}
      attach={9}
      delay={1 + index * 0.35}
      swayDur={5.4 + index * 0.9}
    >
      <figure
        className="polaroid"
        style={{ width, transform: `rotate(${tilt}deg)` }}
      >
        <img src={photo.src} alt="" loading="eager" />
        <figcaption className="polaroid-cap pen">{photo.caption}</figcaption>
      </figure>
    </HangingProp>
  );
}
