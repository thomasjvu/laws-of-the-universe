import { SimpleIconsTwitter, SimpleIconsBuymeacoffee, SimpleIconsFacebook } from "./Icons"

const SocialIcons = () => {

    return (
        <div className="flex gap-5">
            <a href="https://facebook.com/universa" target="_blank">
                <SimpleIconsFacebook className="hover:text-stone-700" />
            </a>
            <a href="https://buymeacoffee.com/universa" target="_blank">
                <SimpleIconsBuymeacoffee className="hover:text-stone-700" />
            </a>
            <a href="https://twitter.com/_universa_" target="_blank">
                <SimpleIconsTwitter className="hover:text-stone-700" />
            </a>
        </div>
    )
}

export default SocialIcons
