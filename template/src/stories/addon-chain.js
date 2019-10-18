import Footer from '~/Footer.md'
import Readme from '~/README.md'

export default {
   Story1: {
      Senario1: (story, scenario) => withNotes(scenario.__notes || '')(story)
   },
   Story2: function (story) {
         let docsStory = withReadme(Readme)(story)
         return withFooter(Footer)(docsStory)
   },
   default: (story, scenario) => withDocs(scenario.__docs || '')(story)
}