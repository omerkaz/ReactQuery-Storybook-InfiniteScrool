import ArtistDetailCard from "../components/cards/ArtistDetailCard";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default { 
    title: "Components/ArtistDetailCard", 
    component: ArtistDetailCard 
};

const Template = (args) =><Provider store={store}> <ArtistDetailCard {...args} /> </Provider>;

export const backgroundColorOptions = Template.bind({});
backgroundColorOptions.args = {
  imageBackgroundColor: "purple",
  infoBackgroundColor: "orange",
  artistBackgroundColor: "yellow",
};
