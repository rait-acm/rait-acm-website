export interface ActualBlogType {
  _id: number;
  mainImage: string;
  title: string;
  author: string;
  publishedOn: string;
  category: string;
  content1: string;
  content2: string;
  smallh: string;
  images: string[];
}

export const ActualBlogData: ActualBlogType[] = [
  {
    _id: 1,
    mainImage: "/images/blog/blog-01.png",
    title: "Startup World - Tech Edition",
    author: "Nalin Khare",
    publishedOn: "Spetember 29, 2022",
    category: "Startups",
    content1: `
        What springs to your mind when you first hear the word "UNICORN" ? To me, a mere 19-year-old, unbeknown to the conventions of the corporate world, it doesn't#39;t seems to imply anything more than a white-winged steed with a horn on its forehead. Naturally, my perplexity knew no bounds when I encountered this term in the context of commerce. At first, I assumed it to be a typing error. However, when this &quot;error &quot; became more frequent, I was forced to accuse my limited familiarity with the subject rather than the publisher's grammar. And that was the moment of epiphany - my first glimpse of corporate practices.
      `,
    smallh: "It seemed to be",
    content2: `
        a labyrinth of trade, finance, commerce, and business, infused with contemporary elements of technology to conceive an empire beyond the four walls of a room. Strange, that something so complex would share its name with a creature from the fairytales. However, each unicorn or startup( as most people call it) has fulfilled dreams that even fairytales have failed to fathom. A tech startup provides technology, products, or services to the market. If it was not for TISCO, the pioneer of the Indian industrial revolution, we would not be a global technology giant today. Gone are the days when you had to slog through years of formal education to innovate and create. Today, an idea in the head and the will to stop at nothing is adequate. With 4,200 tech startups and a 40% annual startup growth rate, India is exploding as the third-largest tech startup hub in the world. The sole purpose of a tech startup is to make lives more straightforward and effortless with technology. Devising modern solutions to everyday problems. Releasing new technology or updating existing ones, improves the quality of our lives. For instance, the covid year saw an upsurge in the ed-tech industry with new online educational platforms opening up and expanding business. With people locked indoors and urgent medicinal needs to be fulfilled, Pharmeasy came to our rescue. Blind dates are a thing of the past now when we have multiple online dating platforms. And these are only a few selective instances. That day is not far from when entrepreneurship will become an attitude and not just a profession.
      `,
    images: ["/images/blog/blog-01.png", "/images/blog/blog-02.png"],
  },
  {
    _id: 2,
    mainImage: "/images/blog/blog-01.png",
    title: "Design is seriosuly hella important",
    author: "Jhon Doe",
    publishedOn: "July 30, 2023",
    category: "Events",
    content1: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.
          Aenean augue ex, condimentum vel metus vitae, aliquam porta elit. Quisque non metus ac orci mollis posuere. Mauris vel ipsum a diam interdum ultricies sed vitae neque. Nulla porttitor quam vitae pulvinar placerat. Nulla fringilla elit sit amet justo feugiat sodales. Morbi eleifend, enim non eleifend laoreet, odio libero lobortis lectus, non porttitor sem urna sit amet metus. In sollicitudin quam est, pellentesque consectetur felis fermentum vitae.
          Nunc elementum elit viverra, tempus quam non
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.
        `,
    smallh: "Design is ..",
    content2: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.
          Aenean augue ex, condimentum vel metus vitae, aliquam porta elit. Quisque non metus ac orci mollis posuere. Mauris vel ipsum a diam interdum ultricies sed vitae neque. Nulla porttitor quam vitae pulvinar placerat. Nulla fringilla elit sit amet justo feugiat sodales. Morbi eleifend, enim non eleifend laoreet, odio libero lobortis lectus, non porttitor sem urna sit amet metus. In sollicitudin quam est, pellentesque consectetur felis fermentum vitae.
          Nunc elementum elit viverra, tempus quam non
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.
        `,
    images: ["/images/blog/blog-01.png", "/images/blog/blog-02.png"],
  },
  {
    _id: 2,
    mainImage: "/images/blog/blog-01.png",
    title: "no DSA no Job. Simple really",
    author: "Jhon Doe",
    publishedOn: "July 30, 2023",
    category: "Events",
    content1: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.
          Aenean augue ex, condimentum vel metus vitae, aliquam porta elit. Quisque non metus ac orci mollis posuere. Mauris vel ipsum a diam interdum ultricies sed vitae neque. Nulla porttitor quam vitae pulvinar placerat. Nulla fringilla elit sit amet justo feugiat sodales. Morbi eleifend, enim non eleifend laoreet, odio libero lobortis lectus, non porttitor sem urna sit amet metus. In sollicitudin quam est, pellentesque consectetur felis fermentum vitae.
          Nunc elementum elit viverra, tempus quam non
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.
        `,
    smallh: "DSA is not easy..",
    content2: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.
          Aenean augue ex, condimentum vel metus vitae, aliquam porta elit. Quisque non metus ac orci mollis posuere. Mauris vel ipsum a diam interdum ultricies sed vitae neque. Nulla porttitor quam vitae pulvinar placerat. Nulla fringilla elit sit amet justo feugiat sodales. Morbi eleifend, enim non eleifend laoreet, odio libero lobortis lectus, non porttitor sem urna sit amet metus. In sollicitudin quam est, pellentesque consectetur felis fermentum vitae.
          Nunc elementum elit viverra, tempus quam non
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.
        `,
    images: ["/images/blog/blog-01.png", "/images/blog/blog-02.png"],
  },
];
