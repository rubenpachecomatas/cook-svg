"use client";

import { SvgElementAttributesType } from "@/types/svg-element-attributes.type";
import { SvgElement } from "@/types/svg-element.type";
import { Eraser, GripVertical } from "lucide-react";
import { SvgElementsProps } from "./types/SvgElements.type";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import SvgElementsInput from "../svg-input/SvgElementsInput";

const SvgElements = ({
  elements,
  handleDeleteElement,
  handleChangeAttribute,
  handleDragElement,
}: SvgElementsProps): React.ReactElement =>
  elements.length > 0 ? (
    <DragDropContext onDragEnd={handleDragElement}>
      <Droppable droppableId="elements-droppable">
        {(provided) => (
          <div
            className="h-full"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <Accordion
              className="h-full overflow-important pb-12"
              type="single"
              collapsible
            >
              {elements.map(({ id, type, attributes }: SvgElement, index) => (
                <Draggable key={id} draggableId={id.toString()} index={index}>
                  {(provided) => (
                    <AccordionItem
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      value={id.toString()}
                    >
                      <AccordionTrigger className=" flex gap-2 px-3 py-1">
                        <div className="flex w-full gap-2 items-center justify-between my-2">
                          <div className="flex gap-1 items-center">
                            <GripVertical />
                            <h4 className="text-lg font-semibold">{type}</h4>
                          </div>
                          <Eraser
                            className="size-5 cursor-pointer hover:text-slate-500"
                            onClick={() => handleDeleteElement(id)}
                          />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-2 px-4 py-1">
                          {Object.keys(attributes).map((field, i) => (
                            <div
                              key={i}
                              className="grid grid-cols-6 items-center gap-2"
                            >
                              <p className="col-span-2 truncate">{field}</p>
                              <SvgElementsInput
                                {...{ id, field, handleChangeAttribute }}
                                value={
                                  attributes[
                                    field as keyof SvgElementAttributesType
                                  ]
                                }
                              />
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Accordion>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  ) : (
    <div className="h-full flex items-center justify-center">
      <h2 className="text-2xl font-bold text-center opacity-25">
        Svg Elements will appear here
      </h2>
    </div>
  );

export default SvgElements;
