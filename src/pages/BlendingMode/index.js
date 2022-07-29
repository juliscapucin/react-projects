export default function BlendingMode() {
  return (
    <div className='blendingmode__container'>
      <section className='blendingmode__text__top'>
        <h2>
          <a href='#'>Pure black text</a> on <a href='#'>white backgrounds</a>{" "}
          can cause <a href='#'>eye strain</a> when users read the text over an
          extended period.
        </h2>
      </section>
      <section className='blendingmode__text'>
        <h1>
          <a href='#'>B&W:</a>
        </h1>
      </section>
      <section className='blendingmode__text__bottom'>
        <h2>
          Such a disparity in <a href='#'>color brightness</a> creates intense
          <a href='#'>light levels</a> that <a href='#'>overstimulate</a> the
          eyes when reading text.
        </h2>
      </section>
    </div>
  );
}
