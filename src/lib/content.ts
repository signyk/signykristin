import { getCollection } from 'astro:content';
import { site } from '../data/site';

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getPublications() {
  const publications = await getCollection('publications');
  return publications.sort((a, b) => b.data.year - a.data.year);
}

export async function getTalks() {
  const talks = await getCollection('talks');
  return talks.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function hasResearchPage() {
  return (await getCollection('publications')).length > 0;
}

export async function getNav() {
  const showResearch = await hasResearchPage();
  return site.nav.filter(({ href }) => href !== '/research/' || showResearch);
}
