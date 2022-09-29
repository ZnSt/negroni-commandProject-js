export default function errorPicture() {
  return `  <div class="sorry">
      <h2 class="sorry-text">Sorry, we didn't find any cocktail for you</h2>
      <picture>
        <source
          srcset="
            ./images/hero/photo-min-1x.png 1x,
            ./images/hero/photo-min-2x.png 2x
          "
          media="(min-width: 768px)"
        />
        <source
          srcset="
            ./images/hero/photo-tab-1x.png 1x,
            ./images/hero/photo-tab-2x.png 2x
          "
          media="(max-width: 767px)"
        />
        <img
          class="sorry-img"
          src="./images/hero/photo-min-1x.png"
          alt="cafe"
        />
      </picture>
    </div>`;
}
