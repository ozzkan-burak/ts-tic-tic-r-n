export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string0"
    },
    {
      name: "video",
      title: "Vidoe0",
      type: "file",
      options: {
        hotspot: true,
      },
    },
    {
      name: "userId0",
      title: "UserId0",
      type: "string"
    },
    {
      name: "postedBY",
      title: "PostedBy",
      type: "postedBy0"
    },
    {
      name: "likes",
      title: "Likes",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "user" }]
        },
      ],
    },
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "comment" }],
    },
    {
      name: "topic",
      title: "Topic",
      type: "string"
    }
  ]
}