{{#if alphabetical}}
export const scenarioOrder = undefined

{{else}}
export const storyOrder = [
  'Story1'
]

export const scenarioOrder = {
  Story1: [
    'Scenario1'
  ]
}
{{/if}}