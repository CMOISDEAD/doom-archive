import Latex from "react-latex";
import { Section } from "../components/Section";
import { Header } from "../components/Header";
import example_1 from "../assets/ejemplo1.png";

export const Article2 = () => {
  return (
    <div>
      <Header
        title="Ejemplo: Aplicación de la derivada"
        author="Camilo Esteban Davila"
        subject="Ejemplo: Aplicación de la derivada"
        date="Dom, 06 Nov 2022 22:42:34"
      />
      <div className="font-mono">
        <div className="flex flex-row justify-between content-center gap-4 w-full">
          <div className="info">
            <Section>
              <h3 className="font-bold text-2xl">
                Ejemplo 1: Aplicación de la derivada
              </h3>
              <h4 className="font-bold text-xl">
                Analizar la gráfica de{" "}
                <Latex>{`$f(x) = \\frac{2(x ^ { 2} - 9)}{x ^ { 2} - 4}$`}</Latex>
              </h4>
            </Section>
            <Section>
              <Latex>
                {`Primera derivada: $f'(x) = \\frac{20x}{(x^{ 2}-4)^{ 2}}$`}
              </Latex>
            </Section>
            <Section>
              <Latex>
                {`Segunda derivada: $f''(x) = \\frac{-20x(3x^{2}+4)}{(x^{2}-4)^{3}}$`}
              </Latex>
            </Section>
            <Section>
              <Latex>Intersecciones con el eje $x$: $(-3, 0), (3, 0)$</Latex>
            </Section>
            <Section>
              <Latex>
                {`Intersección con el eje $y$: $(0, \\frac{9}{2})$`}
              </Latex>
            </Section>
            <Section>
              <Latex>Asintotas verticales: $x=-2, x=2$</Latex>
            </Section>
            <Section>
              <Latex>Asintota horizontal: $y=2$</Latex>
            </Section>
            <Section>
              <Latex>Numero critico: $x = 0$</Latex>
            </Section>
            <Section>
              <Latex>Posibles puntos de inflexión: Ninguno</Latex>
            </Section>
          </div>
          <div className="plot w-4/6">
            <img src={example_1} alt="plot_1" />
          </div>
        </div>
      </div>
    </div>
  );
};
