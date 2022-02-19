import {Component} from 'react'

import {
  AppContainer,
  ContentContainer,
  Heading,
  FormContainer,
  Label,
  Input,
  CustomSelect,
  GenerateButton,
  Option,
  MemeDisplayContainer,
  MemeBox,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeActiveFontSizeOptionId = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  GenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMemePost = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state
    return (
      <MemeBox data-testid="meme" backgroundImage={backgroundImageUrl}>
        <Text activeFontSizeId={activeFontSizeId}>{topText}</Text>
        <Text activeFontSizeId={activeFontSizeId}>{bottomText}</Text>
      </MemeBox>
    )
  }

  render() {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state
    return (
      <AppContainer>
        <ContentContainer>
          <Heading>Meme Generator</Heading>
          <FormContainer onSubmit={this.GenerateMeme}>
            <Label htmlFor="backgroundImageUrl" className="label">
              Image URL
            </Label>
            <Input
              id="backgroundImageUrl"
              type="text"
              placeholder="Enter the image URL"
              value={backgroundImageUrlInput}
              onChange={this.onChangeBackgroundImage}
            />
            <Label htmlFor="topText" className="label">
              Top Text
            </Label>
            <Input
              id="topText"
              type="text"
              placeholder="Enter the Top Text"
              value={topTextInput}
              onChange={this.onChangeTopText}
            />
            <Label htmlFor="bottomText" className="label">
              Bottom Text
            </Label>
            <Input
              id="bottomText"
              type="text"
              placeholder="Enter the Bottom Text"
              value={bottomTextInput}
              onChange={this.onChangeBottomText}
            />
            <Label htmlFor="select" className="label">
              Font Size
            </Label>
            <CustomSelect
              id="select"
              value={activeFontSizeOptionId}
              onChange={this.onChangeActiveFontSizeOptionId}
            >
              {fontSizesOptionsList.map(each => (
                <Option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </Option>
              ))}
            </CustomSelect>
            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
        </ContentContainer>
        <MemeDisplayContainer>{this.renderMemePost()}</MemeDisplayContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
