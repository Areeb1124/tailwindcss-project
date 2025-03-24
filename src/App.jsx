import {Hero,PopularProducts,Services,SpecialOffer,Subscribe,SuperQuality,CustomerReviews,Footer} from "./sections";
import { ThemeProvider } from 'next-themes';
import Nav from "./Components/Nav";

const App = () => (
  <ThemeProvider attribute="class">
  <main className="relative">
    <Nav />
    <div className="h-16 lg:h-20 w-full" />
    {/* This is a hack to prevent the navbar from jumping when the user scrolls to the top of the page */}
    <section className="xl:padding-l wide:padding-r padding-b">
     <Hero />
    </section>
    <section className="padding">
     <PopularProducts /> 
    </section>
    <section className="padding">
     <SuperQuality/>
    </section>
    <section className="padding-x py-10">
     <Services/>
    </section>
    <section className="padding">
     <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding dark:bg-slate-700">
     <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
     <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
     <Footer/>
    </section>

  </main>
  </ThemeProvider>
);

export default App;