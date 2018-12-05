import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { textGrey } from 'utils/colors'
import { upperCaseHeading } from 'utils/mixins'
import { navHeight, mobileNavHeight } from 'utils/sizes'
import { mobile } from 'utils/media'
import { eventbriteLink, graphqlConfLink } from '../utils/config'
import Navbar from '../components/Navbar'
import GraphBg from '../components/GraphBg'
import Container from 'components/Container'
import SectionContent from 'components/SectionContent'
import { DesktopTextBreak, MobileTextBreak } from 'components/TextBreak'
import Button from 'components/Button'
import TopBanner from 'graphiconf/components/TopBanner'

const JoinUsIntro = () => (
  <Wrapper>
    <GraphBgWrapper>
      <GraphBg />
    </GraphBgWrapper>

    <NavbarFloater>
      <Navbar />
    </NavbarFloater>

    <TopBanner
      href={graphqlConfLink}
      bullet="Heads up!"
      children={<span>GraphQL Europe is coming back in 2019 as <strong>GraphQL Conf</strong>. Click here to learn more.</span>} />

    <PopWrapper>
      <Container>
        <SectionContent>
          <Title>
            Join us for Europe’s biggest<DesktopTextBreak /> GraphQL-<MobileTextBreak
              soft
            />dedicated conference
          </Title>
          <Description>
            GraphQL Europe is a non-profit GraphQL conference in Europe with
            speakers from all around the world. Learn about GraphQL best
            practices from industry experts and become part of the thriving
            GraphQL community. GraphQL Europe is organized by Prisma and
            Honeypot.
          </Description>

          <Meta>
            <MetaItem>
              <MetaItemKey>Date</MetaItemKey>
              <MetaItemValue>June 15th, 2018</MetaItemValue>
            </MetaItem>
            <MetaItem>
              <MetaItemKey>Location</MetaItemKey>
              <MetaItemValue>nHow Hotel, Berlin</MetaItemValue>
            </MetaItem>
          </Meta>

          <ButtonWrapper>
            <Button isLink={true} href={eventbriteLink}>
              Get Tickets
            </Button>
          </ButtonWrapper>
        </SectionContent>
      </Container>
    </PopWrapper>
  </Wrapper>
)

export default JoinUsIntro

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: ${rem(navHeight)};

  ${mobile(css`
    padding-top: ${rem(mobileNavHeight)};
  `)};
`

const GraphBgWrapper = styled.div`
  position: absolute;
  top: ${rem(-140)};
  right: ${rem(-40)};
  transform: rotateZ(40deg);

  ${mobile(css`
    top: ${rem(-220)};
    right: ${rem(-310)};
    transform: scale(0.7) rotateZ(130deg) rotateX(180deg) rotateY(180deg);
  `)};
`

const PopWrapper = styled.div`
  position: relative;
`

const NavbarFloater = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${rem(45)};
  font-weight: 800;

  ${mobile(css`
    font-size: ${rem(25)};
  `)};
`

const Description = styled.p`
  margin-top: ${rem(40)};
  margin-bottom: 0;

  max-width: ${rem(620)};
  line-height: 1.5;
  color: ${textGrey};

  ${mobile(css`
    margin-top: ${rem(25)};
    font-size: ${rem(15)};
  `)};
`

const Meta = styled.div`
  margin-top: ${rem(40)};
  margin-bottom: 0;
`

const MetaItem = styled.div`
  padding-right: ${rem(70)};
  display: inline-block;

  ${mobile(css`
    width: 50%;
    padding-right: 0;
  `)};
`

const MetaItemKey = styled.div`
  ${upperCaseHeading};
`

const MetaItemValue = styled.div``

const ButtonWrapper = styled.div`
  margin-top: ${rem(40)};
  margin-bottom: 0;
`

const SecondaryLink = styled.a`
  margin-left: ${rem(30)};
`
