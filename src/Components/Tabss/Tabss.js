import React from 'react';
import { Tabset, Tab, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV, faFolderOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import { faClock, faStar } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const StyledHeader = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const StyledTabContent = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    color: ${props => props.text.label};
    height: 200px;
    border-radius: 0 0 0.875rem 0.875rem;
`;

export default class Tabss extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: 'recents' };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    getTabContent() {
        const { selected } = this.state;

        if (selected === 'primary') {
            return (
                <StyledTabContent
                    aria-labelledby="primary"
                    id="primaryTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </StyledTabContent>
            );
        }
        if (selected === 'recents') {
            return (
                <StyledTabContent
                    aria-labelledby="recents"
                    id="recentsTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows caused by sunlight always appear in the section of sky directly
                    opposite the sun.
                </StyledTabContent>
            );
        }
        if (selected === 'shared') {
            return (
                <StyledTabContent
                    aria-labelledby="shared"
                    id="sharedTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows can be full circles. However, the observer normally sees only an arc
                    formed by illuminated droplets above the ground, and centered on a line from the
                    sun to the observer&apos;s eye.
                </StyledTabContent>
            );
        }
        return (
            <StyledTabContent
                aria-labelledby="locked"
                id="sharedTab"
                className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
            >
                In a primary rainbow, the arc shows red on the outer part and violet on the inner
                side. This rainbow is caused by light being refracted when entering a droplet of
                water, then reflected inside on the back of the droplet and refracted again when
                leaving it.
            </StyledTabContent>
        );
    }

    handleOnSelect(event, selected) {
        this.setState({ selected });
    }

    render() {
        const { selected } = this.state;
        return (
            <div>
                <GlobalHeader>
                    <ButtonIcon icon={<FontAwesomeIcon icon={faCog} />} disabled />
                </GlobalHeader>
                <div className="rainbow-p-around_large rainbow-align-content_space-between">
                    <StyledHeader className="rainbow-font-size-heading_medium rainbow-color_dark-1">
                        This is the header
                    </StyledHeader>
                    <ButtonGroup>
                        <ButtonIcon
                            variant="border"
                            icon={<FontAwesomeIcon icon={faCog} />}
                            disabled
                        />
                        <ButtonIcon
                            variant="border"
                            icon={<FontAwesomeIcon icon={faEllipsisV} />}
                            disabled
                        />
                    </ButtonGroup>
                </div>
                <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                    <Tabset
                        fullWidth
                        id="tabset-2"
                        onSelect={this.handleOnSelect}
                        activeTabName={selected}
                        className="rainbow-p-horizontal_x-large"
                    >
                        <Tab
                            name="primary"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faFolderOpen} /> PRIMARY
                                </span>
                            }
                        />

                        <Tab
                            name="recents"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faClock} /> RECENTS
                                </span>
                            }
                        />

                        <Tab
                            name="shared"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faStar} /> SHARED
                                </span>
                            }
                        />

                        <Tab
                            name="locked"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faLock} /> LOCKED
                                </span>
                            }
                        />
                    </Tabset>
                    {this.getTabContent()}
                </div>
            </div>
        );
    }
}

