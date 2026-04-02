import { TimelineItem, TimelineHeader, TimelineTitle, TimelineDate, TimelineSubtitle } from "../styles/shared";
import { Marginalia } from "./Marginalia";
import { ParallaxMarginalia } from "./ParallaxMarginalia";
import { OverlappingMarginaliaCluster } from "./OverlappingMarginaliaCluster";
import { HandUnderline } from "./HandUnderline";
import { Highlight } from "./Highlight";
import { WithCitation } from "./CitationButton";

function ExperienceItem({
  organization,
  designation,
  duration,
  isCurrent = false,
  isLast = false
}: {
  organization: string;
  designation: string;
  duration: string;
  isCurrent?: boolean;
  isLast?: boolean;
}) {
  // Add annotations to items as examples
  const showAnnotations = !isLast;
  const isFirst = !isLast && isCurrent;
  const isMiddle = !isLast && !isCurrent;

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
