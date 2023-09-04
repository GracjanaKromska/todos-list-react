import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <>
        <Header title="O autorze" />
        <Section
            title="Gracjana Kromska"
            body={
                <>
                    <p>
                        Nazywam się
                        <strong>Gracjana Kromska</strong>. Urodziłam się 15 września 1999 roku, a więc w tym roku obchodzę swoje 24 urodziny. 
                    </p>
                    <p>
                        Z zawodu jestem optykiem okularowym. Pochodzę z wielkopolski, a moim miastem rodzinnym jest Zbąszyń.
                        Obecnie mieszkam z moim mężem w Norwegii.
                    </p>
                </>
            }
        />
    </>
);