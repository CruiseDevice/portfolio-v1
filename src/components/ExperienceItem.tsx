import { TimelineItem, TimelineHeader, TimelineTitle, TimelineDate, TimelineSubtitle } from "../styles/shared";
import { HandUnderline } from "./HandUnderline";
import { Highlight } from "./Highlight";
import { WithCitation } from "./CitationButton";

function ExperienceItem({
  organization,
  designation,
  duration,
  isLast = false
}: {
  organization: string;
  designation: string;
  duration: string;
  isLast?: boolean;
}) {
  // Add annotations to items as examples
  const showAnnotations = !isLast;

  return (
    <WithCitation
      title={`${designation} at ${organization}`}
      author={organization}
      year={duration.split(' - ')[0]}
      format="apa"
      color="blue"
    >
      <TimelineItem style={{ position: 'relative' }}>
        <TimelineHeader>
          <TimelineTitle>
            {designation}
            {showAnnotations && (
              <HandUnderline color="blue" wave>
                <Highlight color="yellow">Key Role</Highlight>
              </HandUnderline>
            )}
          </TimelineTitle>
          <TimelineDate>{duration}</TimelineDate>
        </TimelineHeader>
        <TimelineSubtitle>{organization}</TimelineSubtitle>
      </TimelineItem>
    </WithCitation>
  );
}

export default ExperienceItem;
