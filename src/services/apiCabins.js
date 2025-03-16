import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('Cabins could not be deleted');
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Create/Edit Cabin
  let query = supabase.from('cabins');
  let data, error;

  // Create
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
    ({ data, error } = await query.select().single());
  } else {
    // Edit
    query = query
      .update([{ ...newCabin, image: imagePath }])
      .eq('id', id)
      .select();
    ({ data, error } = await query.single());
  }

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be created or updated');
  }

  // Upload Image
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // Delete the cabin if there was an error uploading the image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data[0].id);
    console.error(storageError);
    throw new Error('Cabins could not be created');
  }

  return data;
}
