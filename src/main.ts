import "./styles.css"
import { mount } from "kaioken"
import ProviderWrapper from "./ProviderWrapper"

const root = document.getElementById("root")!
mount(ProviderWrapper, root)
