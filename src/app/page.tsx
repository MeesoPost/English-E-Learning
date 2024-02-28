import React from "react";
import PageHeader from "./Components/PageHeader/PageHeader";
import { Article, Heading1, Page, PageContent, Paragraph, } from "@utrecht/component-library-react";

export default function Home() {
  return (
    <Page>
      <PageContent>
      <PageHeader
        title="English E-Learning"
        links={[
          { label: "Home", url: "./home.tsx" },
          { label: "Learn", url: "./learn.tsx" },
          { label: "Login", url: "./login.tsx" },
          { label: "Register", url: "./register.tsx" }
        ]}
      />
      <Article className="intro-article">
        <Heading1>The English E-Learning</Heading1>
        <Paragraph className="intro-paragraph">
          This is a simple website for learning English. It is a work in
          progress, but you can already find some lessons and exercises. Were
          constantly updating our content to provide you with the most
          up-to-date and relevant English learning resources. Stay tuned for
          more!
        </Paragraph>
      </Article>
      </PageContent>
    </Page>
  );
}
