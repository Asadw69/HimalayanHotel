const Gallery = () => {
  const images = [
    {
      src: "https://i.postimg.cc/Qtpt6JCD/Ext.png",
      alt: "view",
      class: "md:col-span-2 md:row-span-2 rounded-xl"
    },
    {
      src: "https://i.postimg.cc/FK4yn26b/Whats_App_Image_2026_03_29_at_1_10_58_PM_(9).jpg",
      alt: "balcony corridor",
      class: "md:col-span-1 md:row-span-1 rounded-xl"
    },
    {
      src: "https://i.postimg.cc/KY2PsdWr/Whats_App_Image_2026_03_29_at_1_10_58_PM_(10).jpg",
      alt: "Corridor",
      class: "md:col-span-1 md:row-span-1 rounded-xl"
    },
    {
      src: "https://i.postimg.cc/tTdTr4fG/stairs.png",
      alt: "hotel staircase",
      class: "md:col-span-2 md:row-span-1 rounded-xl"
    }
  ];

  return (
    <section className="py-32 bg-[#eceef0]" id="gallery">
      <div className="px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-4xl font-extrabold text-primary mb-12 text-center tracking-tight">
          Capturing the Essence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {images.map((image, index) => (
            <div key={index} className={`overflow-hidden rounded-xl ${image.class}`}>
              <img
                src={image.src}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
