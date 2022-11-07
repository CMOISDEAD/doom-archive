import Latex from "react-latex";
import { Section } from "../components/Section";
import { Header } from "../components/Header";

export const Article1 = () => {
  return (
    <div>
      <Header
        title="Aplicación de la derivada"
        author="Camilo Esteban Davila"
        subject="Aplicación de la derivada"
        date="Dom, 06 Nov 2022 11:42:34"
      />
      <div className="font-mono">
        <Section title="Definición de números críticos.">
          <Latex>
            Sea $f$ definida en $c$. Si $f'(x) = 0$ o si $f'$ no esta definida
            en $c$, se dice que $c$ es un numero critico de $f$.
          </Latex>
        </Section>
        <Section title="Estrategia para localizar extremos relativos en un intervalo cerrado.">
          <Latex>
            Para hallar los extremos relativos de una función continua $f$ en un
            intervalo cerrado $[a, b]$, debe procederse así:
          </Latex>
          <ol className="ml-8 list-decimal">
            <li>
              <Latex>Hallar los números de críticos de $f$ en $[a, b]$.</Latex>
            </li>
            <li>
              <Latex>Evaluar $f$ en cada numero critico de $(a, b)$.</Latex>
            </li>
            <li>
              <Latex>Evaluar $f$ en $a$ y en $b$.</Latex>
            </li>
            <li>
              El mas grande de todos esos valores es el máximo; el mas pequeño
              es el mínimo.
            </li>
          </ol>
        </Section>
        <Section
          title="Teorema, Criterio de
        crecimiento y decrecimiento."
        >
          <>
            <Latex>
              Sea $f$ una función continua en el intervalo cerrado $[a, b]$
              derivable en el intervalo abierto $(a, b)$.
            </Latex>
            <ol className="ml-8 list-decimal">
              <li>
                <Latex>
                  {`Si $f'(x) > 0$ para todo $x$ en $(a, b)$, $f$ es creciente en $[a, b]$.`}
                </Latex>
              </li>
              <li>
                <Latex>
                  {`SI $f'(x) <_{} 0 $ para todo $x$ en $(a, b)$, $f$ es decreciente en $[a, b]$.`}
                </Latex>
              </li>
              <li>
                <Latex>
                  {`SI $f'(x) = 0 $ para todo $x$ en $(a, b)$, $f$ es constante en $[a, b]$.`}
                </Latex>
              </li>
            </ol>
          </>
        </Section>
        <Section
          title="Estrategia para hallar los intervalos don de una función es creciente
        o decreciente"
        >
          <>
            <Latex>
              Sea $f$ continua en $(a, b)$. Para hallar los intervalos abiertos
              donde $f$ es creciente o decreciente. Seguir los pasos que se
              indican.
            </Latex>
            <ol className="ml-8 list-decimal">
              <li>
                <Latex>
                  Localizar los números cítricos de $f$ en $(a, b)$.
                </Latex>
              </li>
              <li>
                <Latex>
                  Evaluar el signo de $f'(x)$ en cada uno de los intervalos que
                  esos números críticos determinan sobre la recta real.
                </Latex>
              </li>
              <li>
                <Latex>
                  Usar el Teorema 3.5 para decidir si $f$ crece o decrece en
                  cada intervalo.
                </Latex>
              </li>
            </ol>
            <Latex>
              Esta estrategia es valida también si el intervalo $(a, b)$ se
              sustituye por un intervalo de la forma $(-\infty, b)$, $(a,
              \infty)$, o $(-\infty, \infty)$.
            </Latex>
          </>
        </Section>
        <Section title="El criterio de la primera derivada">
          <>
            <Latex>
              Sea $c$ un numero critico de una función $f$ continua en un
              intervalo abierto que contiene a $c$. Si $f$ es derivable en ese
              intervalo, excepto quizás en $c$, entonces $f(c)$ puede
              clasificarse así:
            </Latex>
            <ol className="ml-8 list-decimal">
              <li>
                <Latex>
                  Si $f'(x)$ cambia en $c$ de negativa a positiva, $f(c)$ es un
                  de Minimo relativo $f$.
                </Latex>
              </li>
              <li>
                <Latex>
                  Si $f'(x)$ cambia en $c$ de positiva a negativa, $f(c)$ es un
                  Máximo relativo de $f$.
                </Latex>
              </li>
            </ol>
            <div className="images flex justify-center content-center w-full py-2">
              <img
                src="https://3.bp.blogspot.com/-RlkHhSLx510/Wsai221TcTI/AAAAAAAAkGw/zKq2MMrWcwEVjslxRJt64PuGBeD2D-H_wCLcBGAs/s1600/2.jpg"
                alt="maximos y minimos"
              />
            </div>
          </>
        </Section>
        <Section title="Criterio de concavidad">
          <>
            <Latex>
              Sea $f$ una función cuya segunda derivada existe en un intervalo
              abierto $I$.
            </Latex>
            <ol className="ml-8 list-decimal">
              <li>
                <Latex>
                  {`Si $f''(x) > 0$ para todo $x$ en $I$, la grafica de $f$ es concava
          hacia arriba en $I$.`}
                </Latex>
              </li>
              <li>
                <Latex>
                  {`Si $f''(x) <_{} 0$ para todo $x$ en $I$, la grafica de $f$ es concava hacia abajo en $I$.`}
                </Latex>
              </li>
            </ol>
          </>
        </Section>
        <Section title="Puntos de inflexión">
          <>
            <Latex>
              Si $(c, f(c))$ es un punto de inflexión de la gráfica de $f$,
              entonces o bien $f''(c) = 0$ o $f''(x)$ no esta definida en $x =
              c$.
            </Latex>
          </>
        </Section>
        <Section title="Criterio de la segunda derivada">
          <>
            <Latex>
              Sea $f$ una función tal que $f'(c) = 0$ y cuya segunda derivada
              existe en un intervalo abierto que contiene a $c$.
            </Latex>
          </>
          <ol className="ml-8 list-decimal">
            <li>
              <Latex>
                {`Si $f''(c) > 0$, entonces $f(c)$ en un minimo relativo.`}
              </Latex>
            </li>
            <li>
              <Latex>
                {`Si $f''(c) <_{} 0$, entonces $f(c)$ en un maximo relativo.`}
              </Latex>
            </li>
          </ol>
          <Latex>
            Si $f''(c) = 0$, este criterio no decide y ha de recurrirse al
            criterio de la primera derivada.
          </Latex>
        </Section>
      </div>
    </div>
  );
};
