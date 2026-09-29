"""How each skeleton is cut into its catalogue pieces. Every bone belongs to
exactly one piece, so the pieces put back together rebuild the whole
skeleton. Rules are tried in order on the bone name without its species
prefix; the first match wins."""
import re


def num(name):
    m = re.search(r'_(\d+)$', name)
    return int(m.group(1)) if m else -1


def rx(*patterns):
    return lambda n: any(re.match(p, n) for p in patterns)


PARTS = {
    'Mammouth': [
        ('Dent', rx(r'molar_')), ('Defense', rx(r'tusk_')), ('Crane', rx(r'skull')),
        ('Machoire', rx(r'mandible')), ('Cote', rx(r'rib_', r'sternum')), ('Omoplate', rx(r'scapula_')),
        ('Bras', rx(r'humerus_', r'radius_', r'ulna_', r'manus_')), ('Bassin', rx(r'pelvis')),
        ('Femur', rx(r'femur_', r'patella_')), ('Tibia', rx(r'tibia_', r'fibula_')), ('Pied', rx(r'pes_')),
        ('Vertebre', rx(r'cervical_', r'thoracic_', r'lumbar_', r'sacrum', r'caudal_')),
    ],
    'Brachiosaurus': [
        ('Dent', rx(r'tooth_')), ('Crane', rx(r'skull')), ('Machoire', rx(r'mandible')),
        ('Vertebre', rx(r'cervical_', r'dorsal_', r'sacrum')), ('Cote', rx(r'rib_')),
        ('Omoplate', rx(r'scapula_')), ('Bras', rx(r'humerus_', r'radius_', r'ulna_', r'manus_')),
        ('Bassin', rx(r'pelvis')), ('Femur', rx(r'femur_')), ('Tibia', rx(r'tibia_', r'fibula_')),
        ('Pied', rx(r'pes_')), ('Queue', rx(r'caudal_')),
    ],
    'Mosasaurus': [
        ('Dent', rx(r'tooth_')), ('Crane', rx(r'skull')), ('Machoire', rx(r'mandible_')),
        ('Carre', rx(r'quadrate_')), ('Pterygoide', rx(r'pterygoid_')),
        ('Vertebre', rx(r'cervical_', r'dorsal_', r'pygal_')), ('Cote', rx(r'rib_')),
        ('Omoplate', rx(r'scapula_')), ('Nageoire', rx(r'flipper_front_')), ('Bassin', rx(r'pelvis')),
        ('NageoireArriere', rx(r'flipper_hind_')), ('Queue', rx(r'caudal_')),
    ],
    'Pteranodon': [
        ('Crane', rx(r'skull')), ('Crete', rx(r'crest')), ('Bec', rx(r'beak')), ('Machoire', rx(r'mandible')),
        ('Vertebre', rx(r'cervical_', r'dorsal_', r'caudal_')), ('Cote', rx(r'rib_', r'sternum')),
        ('Omoplate', rx(r'scapulocoracoid_')), ('Bras', rx(r'humerus_', r'radius_', r'ulna_', r'manus_')),
        ('Aile', rx(r'wing_phalanx_')), ('Bassin', rx(r'pelvis')), ('Femur', rx(r'femur_', r'tibia_')),
        ('Pied', rx(r'pes_')),
    ],
    'Titanoboa': [
        ('Dent', rx(r'tooth_')), ('Crane', rx(r'skull')), ('Maxillaire', rx(r'maxilla_')),
        ('Machoire', rx(r'mandible_')), ('Carre', rx(r'quadrate_')), ('Pterygoide', rx(r'pterygoid_')),
        ('Atlas', lambda n: n.startswith('vertebra_') and num(n) <= 3),
        ('Cervicale', lambda n: n.startswith('vertebra_') and num(n) <= 14),
        ('Cote', rx(r'rib_')),
        ('Vertebre', lambda n: n.startswith('vertebra_') and num(n) <= 172),
        ('Caudale', lambda n: n.startswith('vertebra_') and num(n) <= 185),
        ('Queue', rx(r'vertebra_')),
    ],
    'Triceratops': [
        ('Crane', rx(r'skull')), ('Corne', rx(r'horn_brow_')), ('Bec', rx(r'rostral')), ('Machoire', rx(r'mandible')),
        ('Vertebre', rx(r'cervical_', r'dorsal_', r'sacrum', r'ossified_tendons')), ('Cote', rx(r'rib_')),
        ('Omoplate', rx(r'scapula_', r'humerus_', r'radius_', r'ulna_', r'manus_')), ('Bassin', rx(r'pelvis')),
        ('Femur', rx(r'femur_', r'tibia_', r'fibula_')), ('Pied', rx(r'pes_')), ('Queue', rx(r'caudal_')),
    ],
    'Stegosaurus': [
        ('Crane', rx(r'skull')), ('Plaque', rx(r'plate_')), ('Machoire', rx(r'mandible')),
        ('Vertebre', rx(r'cervical_', r'dorsal_', r'sacrum', r'ossified_tendons')), ('Cote', rx(r'rib_')),
        ('Omoplate', rx(r'scapula_')), ('Bras', rx(r'humerus_', r'radius_', r'ulna_', r'manus_')),
        ('Bassin', rx(r'pelvis')), ('Femur', rx(r'femur_', r'tibia_', r'fibula_')), ('Pied', rx(r'pes_')),
        ('Queue', rx(r'caudal_', r'spike_')),
    ],
    'Spinosaurus': [
        ('Dent', rx(r'tooth_')), ('Crane', rx(r'skull')), ('Machoire', rx(r'mandible_')),
        ('Voile', rx(r'dorsal_')), ('Vertebre', rx(r'cervical_', r'sacrum')), ('Cote', rx(r'rib_', r'gastralia')),
        ('Griffe', rx(r'hand_claw_', r'manus_', r'humerus_', r'radius_', r'ulna_', r'scapula_')),
        ('Bassin', rx(r'pelvis')), ('Femur', rx(r'femur_', r'tibia_', r'fibula_')), ('Pied', rx(r'pes_')),
        ('Queue', rx(r'caudal_')),
    ],
    'Velociraptor': [
        ('Dent', rx(r'tooth_')), ('Crane', rx(r'skull')), ('Machoire', rx(r'mandible_')),
        ('Vertebre', rx(r'cervical_', r'dorsal_', r'sacrum')), ('Cote', rx(r'rib_', r'gastralia')),
        ('Fourchette', rx(r'furcula', r'scapula_')), ('Bras', rx(r'humerus_', r'radius_', r'ulna_', r'manus_')),
        ('Griffe', rx(r'sickle_claw_', r'pes_')), ('Bassin', rx(r'pelvis')),
        ('Femur', rx(r'femur_', r'tibia_', r'fibula_')), ('Queue', rx(r'caudal_', r'tail_rods')),
    ],
    'Megalodon': [
        ('Dent', rx(r'tooth_')), ('Crane', rx(r'chondrocranium')), ('Rostre', rx(r'rostrum')),
        ('Machoire', rx(r'jaw_')), ('Branchies', rx(r'gill_arches')), ('Ecailles', rx(r'denticles')),
        ('Ceinture', rx(r'pectoral_girdle')), ('Nageoire', rx(r'pectoral_fin_')),
        ('NageoireDorsale', rx(r'dorsal_fin')),
        ('Vertebre', lambda n: n.startswith('vertebra_') and num(n) <= 110),
        ('Queue', rx(r'vertebra_', r'caudal_fin')),
    ],
    'Smilodon': [
        ('Dent', rx(r'canine_', r'tooth_')), ('Crane', rx(r'skull')), ('Machoire', rx(r'mandible')),
        ('Vertebre', rx(r'cervical_', r'thoracic_', r'lumbar_', r'sacrum', r'caudal_')),
        ('Cote', rx(r'rib_', r'sternum')), ('Omoplate', rx(r'scapula_')),
        ('Bras', rx(r'humerus_', r'radius_', r'ulna_')), ('Griffe', rx(r'claw_', r'manus_')),
        ('Bassin', rx(r'pelvis')), ('Femur', rx(r'femur_', r'tibia_', r'fibula_')), ('Pied', rx(r'pes_')),
    ],
    'Diplodocus': [
        ('Crane', rx(r'skull', r'tooth_')), ('Machoire', rx(r'mandible')),
        ('Vertebre', rx(r'cervical_', r'dorsal_', r'sacrum')), ('Cote', rx(r'rib_')), ('Omoplate', rx(r'scapula_')),
        ('Bras', rx(r'humerus_', r'radius_', r'ulna_', r'manus_')), ('Bassin', rx(r'pelvis')),
        ('Femur', rx(r'femur_')), ('Tibia', rx(r'tibia_', r'fibula_')), ('Pied', rx(r'pes_')),
        ('Queue', rx(r'caudal_')),
    ],
    'Ankylosaurus': [
        ('Crane', rx(r'skull')), ('Machoire', rx(r'mandible')), ('Plaque', rx(r'osteoderm_')),
        ('Massue', rx(r'tail_club')), ('Vertebre', rx(r'cervical_', r'dorsal_', r'sacrum')), ('Cote', rx(r'rib_')),
        ('Bras', rx(r'scapula_', r'humerus_', r'radius_', r'ulna_', r'manus_')), ('Bassin', rx(r'pelvis')),
        ('Femur', rx(r'femur_', r'tibia_', r'fibula_')), ('Pied', rx(r'pes_')),
        ('Queue', rx(r'caudal_', r'ossified_tendons')),
    ],
    'Dimetrodon': [
        ('Dent', rx(r'tooth_')), ('Crane', rx(r'skull')), ('Machoire', rx(r'mandible_')),
        ('Voile', rx(r'dorsal_')), ('Vertebre', rx(r'cervical_', r'sacrum')), ('Cote', rx(r'rib_')),
        ('Omoplate', rx(r'scapula_')), ('Bras', rx(r'humerus_', r'radius_', r'ulna_', r'manus_')),
        ('Bassin', rx(r'pelvis')), ('Femur', rx(r'femur_', r'tibia_', r'fibula_', r'pes_')),
        ('Queue', rx(r'caudal_')),
    ],
    'Giganotosaurus': [
        ('Dent', rx(r'tooth_')), ('Crane', rx(r'skull')), ('Machoire', rx(r'mandible_')),
        ('Vertebre', rx(r'cervical_', r'dorsal_', r'sacrum')), ('Cote', rx(r'rib_', r'gastralia')),
        ('Griffe', rx(r'hand_claw_')), ('Bras', rx(r'scapula_', r'humerus_', r'radius_', r'ulna_', r'manus_')),
        ('Bassin', rx(r'pelvis')), ('Femur', rx(r'femur_', r'tibia_', r'fibula_')), ('Pied', rx(r'pes_')),
        ('Queue', rx(r'caudal_')),
    ],
}


def piece_of(key, bone_name):
    short = bone_name.split('_', 1)[1] if '_' in bone_name else bone_name
    for piece, rule in PARTS[key]:
        if rule(short):
            return piece
    return None
