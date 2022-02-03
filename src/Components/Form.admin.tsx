/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import IconButton from "@material-ui/core/IconButton";
import { MapContainer, TileLayer } from "react-leaflet";

const schema = yup.object().shape({
  title: yup.string().required(),
  artist: yup.string().required(),
  description: yup.string().max(500).required(),
  pictures: yup
    .mixed()
    .test("required", "You need to provide a file", (value) => {
      return value && value.length;
    })
    .test("fileSize", "The file is too large", (value) => {
      return value && value[0] && value[0].size <= 200000;
    })
    .test("type", "We only support jpeg/png", function (value) {
      return (
        value &&
        value[0] &&
        (value[0].type === "image/jpeg" || value[0].type === "image/png")
      );
    }),
});

function CreateArtWork() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">
          Title
          <input {...register("title")} type="text" id="title" name="title" />
          {errors.title && <div className="error">Enter a title</div>}
        </label>
      </div>

      <div>
        <label htmlFor="artist">
          Artist
          <input
            {...register("artist")}
            type="text"
            id="artist"
            name="artist"
          />
          {errors.artist && <div className="error">Enter an artiste</div>}
        </label>
      </div>

      <div>
        <label htmlFor="description">
          Description
          <textarea
            {...register("description")}
            name="description"
            id="description"
          />
          {errors.description && (
            <div className="error">Enter a description</div>
          )}
        </label>
      </div>

      <div>
        <label className="address" htmlFor="address">
          Address
          <input type="text" id="address" name="address" disabled />
        </label>
        <IconButton
          color="primary"
          onClick={() => {
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>;
          }}
        >
          <AddLocationIcon />
        </IconButton>
      </div>

      <div>
        <label className="pictures" htmlFor="pictures">
          Images
          <input
            {...register("pictures")}
            type="file"
            id="pictures"
            name="pictures"
          />
          {errors.pictures && (
            <div className="error">{errors.pictures.message}</div>
          )}
        </label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CreateArtWork;
