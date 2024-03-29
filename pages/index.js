// our-domain.com
import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// export const getServerSideProps = () => {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from an API
//   return {
//     props: {
//       meetups: Dummy,
//     },
//   };
// };

export const getStaticProps = async () => {
  // fetch data from an API
  const client = MongoClient.connect("mongodb://127.0.0.1/meetUps");

  const db = (await client).db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  (await client).close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
