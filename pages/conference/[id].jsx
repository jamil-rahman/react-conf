import React from "react";
import ConferenceHeader from "../../components/ConferenceHeader";
import { ApolloClient, InMemoryCache, gql, client } from "@apollo/client";

export const getStaticPaths = async () => {
  const client = new ApolloClient({
    uri: "https://api.react-finland.fi/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query getConferences {
        conferences {
          id
          name
          startDate
        }
      }
    `,
  });

  const paths = data.conferences.map((conference) => ({
    params: { id: conference.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const client = new ApolloClient({
    uri: "https://api.react-finland.fi/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
    query getConference {
      conference(id: "${params.id}") {
        name
        startDate
        endDate
        organizer {
          name
          company
          aboutShort
          image {
            url
          }
        }
        speakers {
          name
          aboutShort
          company
          image {
            url
          }
        }
        locations {
          name
          image {
            url
          }
        }
        schedules {
          day
          description
        }
        sponsors {
          name
          image {
            url
          }
          company
          aboutShort
        }
      }
    }    
    `,
  });

  return {
    props: {
      conference: data.conference,
    },
  };
};

export default function ConferenceDetail({ conference }) {
  // console.log(conference);
  return (
    <div className="flex flex-col">
      <ConferenceHeader
        title="Conference info"
        content="Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum."
      />

      <div className="pt-6">List</div>
    </div>
  );
}
