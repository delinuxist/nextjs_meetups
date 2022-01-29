import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
  return (
    <ul>
      <li className={classes.list}>
        {meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
          />
        ))}
      </li>
    </ul>
  );
};

export default MeetupList;
