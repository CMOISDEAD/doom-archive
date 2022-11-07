import Latex from "react-latex";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

export const Article4 = () => {
  return (
    <div>
      <Header
        title="Graphs Theory"
        author="Richard Stallman"
        subject="Graphs Theory"
        date="Tue, 06 Sep 2022 00:15:46 -0400"
      />
      <Section title="Graphs Theory">
        <div className="font-mono">
          In mathematics, graph theory is the study of graphs, which are
          mathematical structures used to model pairwise relations between
          objects. A graph in this context is made up of vertices (also called
          nodes or points) which are connected by edges (also called links or
          lines). A distinction is made between undirected graphs, where edges
          link two vertices symmetrically, and directed graphs, where edges link
          two vertices asymmetrically. Graphs are one of the principal objects
          of study in discrete mathematics.
        </div>
      </Section>
      <Section title="Definitions">
        <p>
          Definitions in graph theory vary. The following are some of the more
          basic ways of defining graphs and related mathematical structures.
        </p>
        <h3 className="font-bold">Graph</h3>
        In one restricted but very common sense of the term, a graph is an
        ordered pair <Latex>{"G=(V,E)"}</Latex> comprising:
      </Section>
    </div>
  );
};
