import HomeSectionVideo from "../components/homeSectionVideo/HomeSectionVideo";
import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import modelS from "../assets/model-s.jpg"
import modelX from "../assets/model-x.jpg"
import cybertruck from "../assets/cybertruck.jpg"


export default function HomePage(){
    return(
       <div className="container">
        <section className="section">
            <HomeSectionVideo />
        </section>
        <section className="section">
            <ImageBackgroundSection
                backgroundImage={modelS}
                header="Model S"
                description="View Inventory and Custom Order"
            />
        </section>
        <section className="section">
            <ImageBackgroundSection
                backgroundImage={modelX}
                header="Model X"
                description="View Inventory and Custom Order"
            />
        </section>
        <section className="section">
            <ImageBackgroundSection
                backgroundImage={cybertruck}
                header="Cybertruck"
                description="View Inventory and Custom Order"
            />
        </section>
       </div>
    )
}